import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }
  public async find(req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    const userDoc = await User.findById(id)
    return res.json(userDoc)
  }
  public async store(req: Request, res: Response): Promise<Response> {
    const user = req.body
    const userDoc = await User.create(user)
    return res.json(userDoc)
  }
}

export default new UserController()