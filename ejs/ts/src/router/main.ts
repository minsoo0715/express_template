import { Application, Request, Response } from "express";
import { renderIndex } from "../middleWare/renderIndex";

import { router as SubRouter } from "./sub";
export const main = (app: Application) => {
  app.use("/sub", SubRouter);
  app.get("/", renderIndex);
};
