import { buildSchema } from "graphql"

var schema = buildSchema(`
type Person {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    birthdate: String!
    bio: String!
}

type RootQuery {
    people(page: Int): [Person!]!
}

input PersonInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    birthdate: String!
    bio: String!
}

type RootMutation {
    createPerson(data: PersonInput): Person
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)

export default schema