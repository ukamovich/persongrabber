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
    cars: [Car!]!
}

type Car {
    _id: ID!
    name: String!
    company: String!
    production_year: Int!
    price: Float!
    owner: Person!
}

input PersonInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    birthdate: String!
    bio: String!
}

input CarInput {
    name: String!
    company: String!
    production_year: Int!
    price: Float!
    owner: ID!
}

input FieldInput {
    value: String!
    field: String!
}

type RootQuery {
    people(page: Int, search: FieldInput, sort: FieldInput): [Person!]!
    cars: [Car!]!
    person(search: FieldInput): Person!
}

type RootMutation {
    createPerson(data: PersonInput): Person
    createCar(data: CarInput): Car
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)

export default schema