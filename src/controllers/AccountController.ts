import { Request, Response } from 'express'
import Account, { Account as AccountModel } from '../models/Account'

class AccountController {
    public async index(req: Request, res: Response): Promise<Response> {
      const accounts = await Account.find()
  
      return res.json(accounts)
    }
    public async find(req: Request, res: Response): Promise<Response> {
      const account = await Account.findOne({
          _id: req.params.accountId
      })
  
      return res.json(account)
    }
}

export default new AccountController()