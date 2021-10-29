import Car, { CarInterface } from "../models/car"
import Person, { PersonInterface } from "../models/person"

export {
    personTransformer,
    carTransformer
}

/**
 * Adds and formats information missing from person. Used instead of join, 
 * since mongoDB is not relational.
 * @param person to be modified
 * @returns a complete person with car and birthdate information
 */
async function personTransformer(person: PersonInterface) {
    let cars = await Car.find({owner: person._id}) 
    return {
        ...person._doc,
        birthdate: new Date(person.birthdate).toISOString(),
        cars: cars
    }
}

/**
 * Adds and formats information missing from car. Used instead of join, 
 * since mongoDB is not relational.
 * @param car to be modified
 * @returns a car person with owner information.
 */
async function carTransformer(car: CarInterface) {
    let owner = await Person.findById(car.owner.valueOf())
    return {
        ...car._doc,
        owner: owner
    }
}