import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const respondeUser = await registerNewUser(body);
  res.send(respondeUser);
};

const loginCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const responseLogin = await loginUser(body);
  res.send(responseLogin);
};

export { registerCtrl, loginCtrl };
