import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/blog";

const router = Router();

router.get("/",getItem);
router.get("/",getItems);
router.put("/",updateItem);
router.post("/",postItem);
router.delete("/",deleteItem);

export { router };
