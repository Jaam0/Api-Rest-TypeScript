import { sign, verify } from "jsonwebtoken";
const JWT_SECRET =
  process.env.JWT_SECRET || "Red2-de-Jesus.1Delunoal8.";

const singToken = async (id: string) =>
  sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });

const verifyToken =  (jwt: string) => verify(jwt,JWT_SECRET);

export { singToken, verifyToken };
