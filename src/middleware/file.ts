import multer from "multer";
const multerMiddleware = multer({ dest: "storage/" });

export { multerMiddleware };
