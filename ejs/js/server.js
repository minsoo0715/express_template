import express from 'express';
import session from 'express-session';
import router from './router/main.js';
import ejs from 'ejs';

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static('public'));      

app.use(session({
    secret: "@#@MYSIGN#@&#&",
    resave: false,
    saveUninitialized: true
}))

const server = app.listen(4000, function(){
    console.log("Express Server has started on port 4000");
});

router(app);
