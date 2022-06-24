import {Request, Response} from 'express'

export const renderSub = (req: Request, res: Response) => {
    res.render('sub', {
        title: "sub",
        name: "Hong"
    })
}