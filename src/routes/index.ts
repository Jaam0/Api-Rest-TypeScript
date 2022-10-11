import { Router, Request, Response } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => fileName.split(".").shift();

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`The routes are loading... /${cleanName}`.bgGreen);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
