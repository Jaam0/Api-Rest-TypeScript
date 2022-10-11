import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage";

const uploadRegister = async (body: Storage) => {
  const newStorage = {
    filename: body.fileName,
    path: body.path,
    iduser: body.iduser,
  };

  const responseInsert = await StorageModel.create(newStorage);
  await responseInsert.save();
  return responseInsert;
};

export { uploadRegister };
