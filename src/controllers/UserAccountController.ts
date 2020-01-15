import { Request, Response } from 'express'
import Account from '../models/Account'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await Account.find({
      owner: req.params.userId
    })

    return res.json(users)
  }
  public async store(req: Request, res: Response): Promise<Response> {
    const account = req.body
    account.owner = req.params.userId
    const userDoc = await Account.create(account)
    return res.json(userDoc)
  }
}

export default new UserController()