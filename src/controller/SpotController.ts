import { Request, Response } from 'express'
import { Spot } from '../models/Spot'
import { User } from '../models/User'

class SpotController {
  public async index (req: Request, res: Response): Promise<Response> {
      try {
          const { tech } = req.query
          const spots = await Spot.find({ techs: tech })
          return res.json(spots)
      }
      catch (err) {
          return res.send({ err })
      }
  }


  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const { filename } = req.file
      const { company, techs, price } = req.body
      const { user_id } = req.headers

      const user = await User.findById(user_id)

      if(!user) {
          return res.status(400).send({ error: "Usuário não existe" })
      }

      const spot = await Spot.create({
          user: user_id,
          thumbnail: filename,
          company,
          techs: techs.split(',').map(tech => tech.trim()),
          price
      })

      return res.json(spot)
    }
    catch(err) {
      console.log(err)
    }
  }
}

export default new SpotController()