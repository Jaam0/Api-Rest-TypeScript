import { Response, Request, NextFunction } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser: any = verifyToken(`${jwt}`);

    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      console.log({ jwtByUser });
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESSION_NO_VALIDA");
  }
};

export { checkJwt };
