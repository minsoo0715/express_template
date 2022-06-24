import { Router, Request, Response } from "express";
import { renderSub } from "../middleWare/renderSub";
export const router: Router = Router();

router.get("/", renderSub);
