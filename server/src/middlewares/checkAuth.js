import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const [type, token] = req.headers.authorization.split(' ');

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);

      req.adminId = decoded._id;

      next();
    } catch (error) {
      return res.status(403).json({ message: 'Нет доступа' });
    }
  } else {
    return res.status(403).json({ message: 'Нет доступа' });
  }
};
