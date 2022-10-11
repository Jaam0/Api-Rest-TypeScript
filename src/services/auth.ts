import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verfied } from "../utils/bcrypt.handle";
import { singToken } from "../utils/jwt.handle";

const registerNewUser = async (body: User) => {
  const checkIs = await UserModel.findOne({ where: { email: body.email } });

  if (checkIs) return "ALREADY_USER";

  const passwordHash = await encrypt(body.password);

  const newUser = {
    name: body.name,
    description: body.description,
    email: body.email,
    password: passwordHash,
  };
  const registerNewUser = await UserModel.create(newUser);
  await registerNewUser.save();
  return registerNewUser;
};

const loginUser = async (body: Auth) => {
  const checkIs: any = await UserModel.findOne({
    where: { email: body.email },
  });

  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password;
  const isCorrect = await verfied(body.password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  console.log(checkIs.email);
  const token = await singToken(checkIs.email);
  
  const data = {
    token: token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };
