import {Request, Response} from 'express'

export const renderIndex = (req: Request, res: Response) => {
    res.render('index', {
        title: "My HOMEPAGE",
        length: 5
    })
}