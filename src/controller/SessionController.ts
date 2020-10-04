import { Request, Response } from 'express'
import { User } from '../models/User'

class SessionController {
  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body
      if(await User.find({ email })) {
        console.log("Usuário já existe")
      }
      const user = await User.create({ email })

      return res.json(user)
    }
    catch(err) {
      console.log(err)
    }
  }
}

export default new SessionController()