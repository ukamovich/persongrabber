import mongoose from "mongoose"

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    production_year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Car", carSchema)