import Car, { CarInterface } from "../../models/car"
import Person from "../../models/person"
import { carTransformer } from "../transformers"

let resolver = {
    cars: async () => {
        try {
            let car = await Car.find().limit(2)
            return car.map(car => {
                return carTransformer(car)
            })
        } catch (err) {
            throw err
        }
    },
    createCar: async (args: {data: CarInterface}) => {
        let newCar = new Car({
            name: args.data.name,
            company: args.data.company,
            production_year: args.data.production_year,
            price: args.data.price,
            owner: args.data.owner,
        })
        try {
            let owner = await Person.findById(args.data.owner)
            if (!owner) {
                throw new Error("User not found!")
            }
            let result = await newCar.save()
            return {
                ...result._doc,
                owner: owner
            }
        } catch (err) {
            throw err
        }
    }
}

export default resolver