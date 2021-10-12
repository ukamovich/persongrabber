var dummyData = [{name: "Tod", age: 10}, {name: "Ted", age: 11}, {name: "Tid", age: 12}]

var resolvers = {
    people: () => {
        return dummyData
    },
    createPerson: (args: {name: string, age: number}) => {
        let person = {name: args.name, age: args.age}
        dummyData.push(person)
        return person
    }
}

export default resolvers