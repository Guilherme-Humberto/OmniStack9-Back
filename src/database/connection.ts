import mongoose from 'mongoose'
import 'dotenv/config'

export const connection = mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})