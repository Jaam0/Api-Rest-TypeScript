import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { uploadRegister } from "../services/storage";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    console.log(user,file);
    const dataRoRegister: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      iduser: `${user?.id}`,
    };
    const response = await uploadRegister(dataRoRegister);
    res.send(response);
    res.send('jjjjjjjjjj')
  } catch (e) {
    handleHttp(res, "ERROR_POST_FILE");
  }
};

export { getFile };
