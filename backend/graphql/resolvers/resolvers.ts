import peopleResolver from "./people"
import carResolver from "./cars"

// Combiner object for resolvers
var resolvers = {
    ...peopleResolver,
    ...carResolver
}

export default resolvers