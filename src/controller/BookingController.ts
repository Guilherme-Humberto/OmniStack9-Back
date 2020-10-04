import { Request, Response } from 'express'
import { Booking } from '../models/Booking'

class SessionController {
  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { user_id } = req.headers
      const { spot_id } = req.params
      const { date } = req.body

      const bookign = await Booking.create({
          user: user_id,
          spot: spot_id,
          date
      })

      await bookign.populate('spot').populate('user').execPopulate()

      return res.json(bookign)
    }
    catch(err) {
      console.log(err)
    }
  }
}

export default new SessionController()