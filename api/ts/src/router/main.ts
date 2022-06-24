import { Application, Request, Response } from "express";
import { getFile } from "../middleWare/getFile";
import { getIndex } from "../middleWare/getIndex";

import { router as SubRouter } from "./sub";
export const main = (app: Application) => {
  app.use("/sub", SubRouter);
  app.get("/", getIndex);
  app.get("/file", getFile)
};
