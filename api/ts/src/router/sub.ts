import { Router, Request, Response } from "express";
import { getSub } from "../middleWare/getSub";
export const router: Router = Router();

router.get("/", getSub);
