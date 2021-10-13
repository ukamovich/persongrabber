import Person, { PersonInterface } from "../../models/person"

const pageSize = 20

var resolvers = {
    people: (args: {page: number}) => {
        return Person.find().sort({}).skip((args.page - 1) * pageSize).limit(pageSize).then(people => {
            return people.map(person => {
                // Conversion since interface disallowes direct transumtation
                let currentPerson = {
                    _id: person._id, 
                    first_name: person.first_name, 
                    last_name: person.last_name, 
                    gender: person.gender, 
                    email: person.email, 
                    bio: person.bio, 
                    birthdate: person.birthdate.toISOString()
                }
                return currentPerson
            })
        }).catch(err => {
            throw err
        })
    },
    createPerson: (args: {data: PersonInterface}) => {
        let person = new Person({
            first_name: args.data.first_name,
            last_name: args.data.last_name,
            email: args.data.email,
            gender: args.data.gender,
            birthdate: new Date(args.data.birthdate),
            bio: args.data.bio,
        })
        return person.save().then(result => {
            return result
        }).catch(err => {
            throw err
        })
    }
}

export default resolvers