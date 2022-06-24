import express, {
  Application,
  json,
  RequestHandler,
  urlencoded,
} from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import { main as mainRouter } from "./router/main";

const app: Application = express();
app.use(compression());
app.use(cookieParser());
app.use(json() as RequestHandler);
app.use(urlencoded({ extended: false }) as RequestHandler);

mainRouter(app);
app.use(express.static(`${__dirname}/public`));

app.listen(8000, () => {
  console.log("Express server has started on port 8000");
});
