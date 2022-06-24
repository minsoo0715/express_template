import {Router} from 'express'
import { getSub } from '../middleWare/getSub.js'
export const router = Router()

router.get('/', getSub)


