import mongoose from 'mongoose'
import 'dotenv/config'

export const connection = mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado ao banco"))
.catch(err => console.log(err))