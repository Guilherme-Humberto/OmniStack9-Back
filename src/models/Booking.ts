import { Schema, model } from 'mongoose'

const BookingSchema = new Schema({
    date: String,
    approved: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    spot: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    }
})

const Booking = model("Booking", BookingSchema)
export { Booking }