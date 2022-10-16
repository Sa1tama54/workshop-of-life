import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/Admin.model';

const register = async (req, res) => {
  try {
    const { password, login } = req.body;
    const salt = await bcrypt.genSalt(process.env.BCRYPT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const doc = await AdminModel({
      login,
      passwordHash: hash,
    });

    const admin = await doc.save();

    const { _id, _doc } = admin;

    const token = jwt.sign(
      {
        _id,
      },
      process.env.SECRET_JWT_KEY,
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = _doc;

    res.json({
      userData,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при регистрации',
    });
  }
};

const login = async (req, res) => {
  try {
    const candidate = await AdminModel.findOne({ login: req.body.login });

    if (!candidate) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      });
    }

    const { _id, _doc } = candidate;

    const isValidPassword = await bcrypt.compare(req.body.password, _doc.passwordHash);

    if (!isValidPassword) {
      return res.status(404).json({
        message: 'Неверный логин или пароль',
      });
    }

    const token = jwt.sign(
      {
        _id,
      },
      process.env.SECRET_JWT_KEY,
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = _doc;

    res.json({
      userData,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при авторизации',
    });
  }
};

export default { register, login };
