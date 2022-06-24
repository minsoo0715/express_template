import express, {json, urlencoded} from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import {main as useRouter} from './router/main.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: false }));

useRouter(app);
app.use(express.static(`${__dirname}/public`));

app.listen(8000, function(){
    console.log("Express Server has started on port 8000");
});

