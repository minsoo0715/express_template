import { getFile } from "../middleWare/getFile.js";
import { getIndex } from "../middleWare/getIndex.js";
import {router as subRouter} from "./sub.js";

export const main = (app) => {
    app.use('/sub', subRouter);
    app.get('/', getIndex);
    app.get('/file', getFile);
}

