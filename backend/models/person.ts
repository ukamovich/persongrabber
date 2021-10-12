import mongoose from "mongoose"

const personSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
})

export default mongoose.model("Person", personSchema)