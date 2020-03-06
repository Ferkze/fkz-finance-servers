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
    public async store(req: Request, res: Response): Promise<Response> {
      const account = req.body as AccountModel
      const doc = await Account.create(account)
      return res.json(doc)
    }
    public async put(req: Request, res: Response): Promise<Response> {
      const account = req.body as AccountModel
      const doc = await Account.findByIdAndUpdate(req.params.accountId, account, { new: true })
      return res.json(doc)
    }
    public async delete(req: Request, res: Response): Promise<Response> {
      const result = await Account.deleteOne({
        _id: req.params.accountId
      })
      return res.json(result)
    }
}

export default new AccountController()