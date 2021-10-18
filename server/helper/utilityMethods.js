import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.substring(7);
  console.log(authHeader);
  if (!token) return res.status(401).json('Access denide!!!');
  jwt.verify(token, process.env.SECREATE_KEY, (err, user) => {
    if (err)
      return res
        .set({ 'token-expire': true })
        .status(403)
        .json('Token is not valid!!!');
    req.user = user;
    next();
  });
};
