import { Request, Response } from 'express'
import { Spot } from '../models/Spot'
import { User } from '../models/User'

class DashboardController {
  public async show (req: Request, res: Response): Promise<Response> {
      try {
          const { user_id } = req.headers
          const spots = await Spot.find({ user: user_id })

          return res.json(spots)
      }
      catch (err) {
          return res.send({ err })
      }
  }
}

export default new DashboardController()