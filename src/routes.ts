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
router.delete('/user/:userId', UserController.delete)
router.put('/user/:userId', UserController.update)

router.get('/user/:userId/accounts', UserAccountController.index)
router.post('/user/:userId/accounts', UserAccountController.store)
router.put('/user/:userId/account/:accountId', UserAccountController.update)
router.delete('/user/:userId/account/:accountId', UserAccountController.delete)

// -

router.get('/transactions', TransactionController.index)
router.get('/transactions/:transactionId', TransactionController.index)
router.post('/transactions', TransactionController.store)

router.get('/accounts', AccountController.index)
router.delete('/accounts/:accountId', AccountController.delete)
router.get('/accounts/:accountId/transactions', TransactionController.findByAccount)
router.post('/accounts', AccountController.store)
router.put('/account/:accountId', AccountController.put)

export default router
