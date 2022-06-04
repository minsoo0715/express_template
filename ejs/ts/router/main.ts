import {Application, Request, Response} from 'express'
import {router as SubRouter} from './sub'

export const main = (app:Application) => {

    app.use('/sub', SubRouter)

    app.get('/', function(req:Request, res:Response) {
        res.render('index', {
            title: "My HOMEPAGE",
            length: 5
        })
    })
}