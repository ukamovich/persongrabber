// import Person, { PersonInterface } from "../../models/person"
// import Car, { CarInterface } from "../../models/car"
import peopleResolver from "./people"
import carResolver from "./cars"

var resolvers = {
    ...peopleResolver,
    ...carResolver
}

export default resolvers