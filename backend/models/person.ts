import {Schema, Document, model, Model} from "mongoose"

export {
    PersonInterface
}

interface PersonInterface extends Document{
    first_name: String
    last_name: String
    email: String
    gender: String
    birthdate: Date
    bio: String
}


const personSchema: Schema = new Schema({
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
}, {collection: "Person"})

const Person : Model<PersonInterface> = model<PersonInterface>("Person", personSchema)

export default Person