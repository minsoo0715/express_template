import {Request, Response} from 'express'

export const getSub = (req: Request, res: Response) => {
    res.json({
        routerName: "getSub"
    })
}