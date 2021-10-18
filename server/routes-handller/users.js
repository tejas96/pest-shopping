import UserService from "../services/userService";

const userService = new UserService();
export default {
  userRegister: (req, res) => {
    try {
      let user = req.body;
      userService
        .saveUser(user)
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(403).json(err.message);
        });
    } catch (err) {
      res.status(403).json(err.message);
    }
  },
  userLogin: (req, res) => {
    try {
      const logins = req.body;
      userService
        .loginUser({ userName: logins.userName, password: logins.password })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(403).json(err.message);
        });
    } catch (err) {
      res.status(500).json("Internal server error!!!");
    }
  },
};
