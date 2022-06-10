import express, {json, urlencoded} from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import {main as mainRouter} from './router/main.js'
import ejs from 'ejs';

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(session({
    secret: "@#@MYSIGN#@&#&",
    resave: false,
    saveUninitialized: true
}))

mainRouter(app);
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static('public'));

app.listen(4000, function(){
    console.log("Express Server has started on port 4000");
});

