import Person from "./../../models/person"


var dummyData = [{name: "Tod", age: 10}, {name: "Ted", age: 11}, {name: "Tid", age: 12}]

var resolvers = {
    people: () => {
        return dummyData
    },
    createPerson: (args: {name: string, age: number}) => {
        let test = new Person({
            first_name: "Test1",
            last_name: "Tester",
            email: "test@test.test",
            gender: "No gender",
            birthdate: new Date(),
            bio: "Lorem ipsum"
        })
        console.log(test)
        let person = {name: args.name, age: args.age}
        dummyData.push(person)
        return person
    }
}

export default resolvers