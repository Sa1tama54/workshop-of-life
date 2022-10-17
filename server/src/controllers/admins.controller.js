import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AdminModel from '../models/Admin.model';

const register = async (req, res) => {
  try {
    const { password, login } = req.body;
    const salt = await bcrypt.genSalt(+process.env.BCRYPT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);

    const doc = await AdminModel({
      login,
      passwordHash: hash,
    });

    const admin = await doc.save();

    const token = jwt.sign(
      {
        _id: admin._id,
      },
      process.env.SECRET_JWT_KEY,
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = admin._doc;

    res.json({
      userData,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: `Ошибка при регистрации`,
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


    const isValidPassword = await bcrypt.compare(req.body.password, candidate._doc.passwordHash);

    if (!isValidPassword) {
      return res.status(404).json({
        message: 'Неверный логин или пароль',
      });
    }

    const token = jwt.sign(
      {
        _id: candidate._id,
      },
      process.env.SECRET_JWT_KEY,
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = candidate._doc;

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
