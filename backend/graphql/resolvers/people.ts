import { argsToArgsConfig } from "graphql/type/definition"
import Person, { PersonInterface } from "../../models/person"
import { personTransformer } from "../transformers"

interface FieldInput {
    value: string,
    field: string
}

const pageSize: number = 20

/**
 * Takes a list of search-field value pairs, which are translated to 
 * object used for mongoose find
 * @param search What to search on and which field to apply it to
 * @returns a search object to be used in mongoose find
 */
function getSearchQuery(search: FieldInput[]) {
    let result: {[k:string]: any} = {}
    if (!search) {
        return result
    }

    for (let element of search) {
        switch (element.field) {
            case "first_name":
                result.first_name = {$regex: new RegExp(element.value.toLowerCase(), "i")}
                break
            case "last_name": 
                result.last_name = {$regex: new RegExp(element.value.toLowerCase(), "i")}
                break
            case "gender":
                result.gender = element.value
                break
            case "_id":
                result._id = element.value
                break
            case "bio":
                result.bio = {$regex: new RegExp(element.value.toLowerCase(), "i")}
                break
            default:
                break
        }
    }
    return result
}

/**
 * Takes a field and value to create an object used for mongoose sort.
 * @param sort field and value to sort on
 * @returns object to sort on
 */
function getSortQuery(sort: FieldInput) {
    let result = {}
    if (!sort) {
        return result
    }
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

// Resolvers for people / person queries / mutations
let resolver = {
    people: async (args: {page: number, search: FieldInput[], sort: FieldInput}) => {
        try {
            let people
            if (args.page){
                people = await Person.find(getSearchQuery(args.search)).sort(getSortQuery(args.sort)).skip((args.page - 1) * pageSize).limit(pageSize)
            } else {
                people = await Person.find(getSearchQuery(args.search)).sort(getSortQuery(args.sort))
            }
            return people.map((person) => {
                return personTransformer(person)
            })
        } catch (err) {
            throw err
        }
    },

    generalPeopleInfo: async (args: {search: FieldInput[], distinct: string}) => {
        try {
            let distinct: string[] = []
            let size = 0
            if (args.distinct) {
                distinct = await Person.distinct(args.distinct)
            }
            if (args.search) {
                size = await Person.count(getSearchQuery(args.search))
            }
            return {size: size, distinct: distinct}
        } catch (err) {
            throw err
        }
    },

    person: async (args: {search: FieldInput[]}) => {
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