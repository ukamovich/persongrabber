import express from "express";
import { graphqlHTTP } from 'express-graphql'
import schema from "./graphql/schema/schema"
import resolvers from "./graphql/resolvers/resolvers"
require("dotenv").config()
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 3001
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

const databasePath = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@it2810-43.idi.ntnu.no:27017/personGrabberDB?authSource=personGrabberDB`

mongoose.connect(databasePath)

mongoose.connection.on("error", (err) => {
    throw err
})

// let temp = mongoose.connection.collections

// console.log(temp)

app.listen(port, () => {
    console.log(`Hosting on http://localhost:${port}`)
})