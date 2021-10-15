import Person, { PersonInterface } from "../../models/person"
import { personTransformer } from "../transformers"

const pageSize: number = 20

let resolver = {
    people: async (args: {page: number}) => {
        try {
            // const people = await Person.find().skip((args.page - 1) * pageSize).limit(pageSize).aggregate([{
            //     $lookup: {
            //         from: "cars",
            //         localField: "_id",
            //         foreignField: "owner",
            //         as: "cars"
            //     }
            // }])
            const people = await Person.find().skip((args.page - 1) * pageSize).limit(pageSize)
            return people.map((person) => {
                return personTransformer(person)
            })
        } catch (err) {
            throw err
        }
    },

    person: async (args: {id: string, first_name: string}) => {
        try {
            let person = await Person.findOne({first_name: args.first_name})
            if (!person) {
                return
            }
            return await personTransformer(person)
        } catch (err) {
            throw err
        }
    },

    createPerson: async (args: {data: PersonInterface}) => {
        let person = new Person({
            first_name: args.data.first_name,
            last_name: args.data.last_name,
            email: args.data.email,
            gender: args.data.gender,
            birthdate: new Date(args.data.birthdate),
            bio: args.data.bio,
        })
        try {
            return await person.save()
        } catch (err) {
            throw err
        }
    }
}

export default resolver