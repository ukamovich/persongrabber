import Person, { PersonInterface } from "../../models/person"
import { personTransformer } from "../transformers"

const pageSize: number = 20

function getSearchQuery(search: {value: string, field: string}) {
    let result = {}
    switch (search.field) {
        case "first_name":
            result = {first_name: {$regex: new RegExp(search.value.toLowerCase(), "i")}}
            break
        case "last_name": 
            result = {last_name: {$regex: new RegExp(search.value.toLowerCase(), "i")}}
            break
        case "gender":
            result = {gender: search.value}
            break
        case "_id":
            result = {_id: search.value}
            break
        case "bio":
            result = {bio: {$regex: new RegExp(search.value.toLowerCase(), "i")}}
            break
        default:
            break
    }
    return result
}

function getSortQuery(sort: {value: string, field: string}) {
    let result = {}
    switch (sort.field) {
        case "first_name":
            result = {first_name: sort.value}
            break
        case "last_name": 
            result = {last_name: sort.value}
            break
        case "gender":
            result = {gender: sort.value}
            break
        case "_id":
            result = {_id: sort.value}
            break
        case "bio":
            result = {bio: sort.value}
            break
        case "birthdate":
            result = {birthdate: sort.value}
            break
        default:
            break
    }
    return result
}


let resolver = {
    people: async (args: {page: number, search: {value: string, field: string}, sort: {value: string, field: string}}) => {
        try {
            // const people = await Person.find().skip((args.page - 1) * pageSize).limit(pageSize).aggregate([{
            //     $lookup: {
            //         from: "cars",
            //         localField: "_id",
            //         foreignField: "owner",
            //         as: "cars"
            //     }
            // }])
            const people = await Person.find(getSearchQuery(args.search)).sort(getSortQuery(args.sort)).skip((args.page - 1) * pageSize).limit(pageSize)
            return people.map((person) => {
                return personTransformer(person)
            })
        } catch (err) {
            throw err
        }
    },

    person: async (args: {search: {value: string, field: string}}) => {
        try {
            let person = await Person.findOne(getSearchQuery(args.search))
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