import { Router } from 'express'
import UserController from './controllers/UserController'
import UserAccountController from './controllers/UserAccountController'

const router = Router()

router.get('/users', UserController.index)
router.get('/user/:id', UserController.find)
router.post('/users', UserController.store)
router.get('/user/:userId/accounts', UserAccountController.index)
router.post('/user/:userId/accounts', UserAccountController.store)

export default router
