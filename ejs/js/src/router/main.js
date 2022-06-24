import { renderIndex } from "../middleWare/renderIndex.js";
import {router as subRouter} from "./sub.js";

export const main = (app) => {
    app.use('/sub', subRouter);
    app.get('/', renderIndex);
}

