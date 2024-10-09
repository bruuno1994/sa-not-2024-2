import { Router } from 'express'
import controller from '../controllers/xss.js'

const xssRouter = Router()

xssRouter.get('/', controller.index)
xssRouter.post('/', controller.create)

export default xssRouter