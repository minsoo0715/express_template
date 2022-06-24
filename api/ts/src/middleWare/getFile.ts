import {Request, Response} from 'express'
import path from 'path';

export const getFile = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/", "test.txt"));
}