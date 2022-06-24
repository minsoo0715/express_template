import {Router} from 'express'
import { renderSub } from '../middleWare/renderSub.js'
export const router = Router()

router.get('/', renderSub)


