import {Schema, Document, model} from "mongoose"
import { PersonInterface } from "./person"

export {
    CarInterface
}

interface CarInterface extends Document{
    name: String
    company: String
    production_year: number
    price: number
    owner: Schema.Types.ObjectId | PersonInterface
    _doc?: any
}

// Car schema for db
const carSchema = new Schema({
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
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
    }
}, {collection: "cars"})

export default model<CarInterface>("Car", carSchema)