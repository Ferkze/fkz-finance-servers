import { Router } from 'express'
import AccountController from './controllers/AccountController'
import UserController from './controllers/UserController'
import UserAccountController from './controllers/UserAccountController'
import TransactionController from './controllers/TransactionController'
import IndexController from './controllers/IndexController'

const router = Router()

router.get('/', IndexController.index)
router.get('/users', UserController.index)
router.get('/user/:id', UserController.find)
router.post('/users', UserController.store)
router.get('/user/:userId/accounts', UserAccountController.index)
router.post('/user/:userId/accounts', UserAccountController.store)

router.get('/transactions', TransactionController.index)
router.get('/transactions/:transactionId', TransactionController.index)
router.post('/transactions', TransactionController.store)

router.get('/accounts', AccountController.index)
router.get('/accounts/:accountId/transactions', TransactionController.findByAccount)

export default router
