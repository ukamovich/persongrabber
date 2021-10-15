import Car, { CarInterface } from "../models/car"
import Person, { PersonInterface } from "../models/person"

export {
    personTransformer,
    carTransformer
}

async function personTransformer(person: PersonInterface) {
    let cars = await Car.find({owner: person._id}) 
    return {
        ...person._doc,
        birthdate: new Date(person.birthdate).toISOString(),
        cars: cars
    }
}

async function carTransformer(car: CarInterface) {
    let owner = await Person.findById(car.owner.valueOf())
    return {
        ...car._doc,
        owner: owner
    }
}