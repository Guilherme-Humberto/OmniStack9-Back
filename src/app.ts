import express from 'express'
import { connection } from './database/connection'
import routes from './routes/routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.DBConnect()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
    }

    public DBConnect (): void{
      connection
        .then(() => console.log('Banco conectado'))
        .catch(err => console.log(`erro ao conectar ${err}`))
    }

    public routes (): void {
      this.express.use(routes)
    }
}

export default new App()