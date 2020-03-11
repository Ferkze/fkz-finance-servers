import { Request, Response } from 'express'
import User from '../models/User'

interface LoginData {
  email ?: string
  password ?: string
}

interface RegisterData {
  username ?: string
  email ?: string
  password ?: string
  firstName ?: string
  lastName ?: string
  accounts?: Account[]
  createdAt?: string
  updatedAt?: string
}

class AuthController {
  public async login(req: Request, res: Response): Promise<Response> {
    const data = req.body as LoginData
    const user = await User.findOne({ email: data.email})
    if (!user) {
      return res.status(403).json({
        message: 'Email inválido'
      })
    }
    return res.json(user)
  }
  public async register(req: Request, res: Response): Promise<Response> {
    const data = req.body as RegisterData
    let user = await User.findOne({ email: data.email, username: data.username })
    if (user) {
      return res.status(403).json({
        message: 'O email já está sendo utilizado'
      })
    }
    user = await User.create(data)
    return res.json(user)
  }
}

export default new AuthController()