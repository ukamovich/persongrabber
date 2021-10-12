import { buildSchema } from "graphql"

var schema = buildSchema(`
type Person {
    name: String!
    age: Int!
}

type RootQuery {
    people: [Person!]!
}

type RootMutation {
    createPerson(name: String, age: Int): Person
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)

export default schema