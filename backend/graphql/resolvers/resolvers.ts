import Person, { PersonInterface } from "../../models/person"

const pageSize = 20

var resolvers = {
    people: (args: {page: number}) => {
        return Person.find().sort({}).skip((args.page - 1) * pageSize).limit(pageSize).then(people => {
            return people
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