import User from "../models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class UserService {
  constructor() {}

  async getUserByUserName(userName) {
    return User.find({ userName });
  }

  async saveUser(userObj) {
    //validate user details
    const userExist = await this.getUserByUserName(userObj?.userName);
    if (userExist.length > 0 || userExist[0]?.userName === userObj.userName) {
      throw new Error("User alredy present!!!");
    }
    //encrypt password
    userObj.password = await bcryptjs.hash(userObj.password, 10);
    let user = new User(userObj);
    return user.save();
  }

  async loginUser({ userName, password }) {
    let userExist = await this.getUserByUserName(userName);
    if (userExist.length === 0) throw new Error("User not found");
    userExist = userExist[0];
    let hashMatch = await bcryptjs.compare(password, userExist.password);
    if (!hashMatch) throw new Error("Invalid password!!!");

    const token = jwt.sign(
      {
        user: {
          id: userExist._id,
          userName: userExist.userName,
          mobile: userExist.mobile,
        },
      },
      process.env.SECREATE_KEY,
      {
        expiresIn: "30d",
      }
    );
    return { user: userExist, token };
  }
}

export default UserService;
