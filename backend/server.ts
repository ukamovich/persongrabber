import express from "express";
import cors from "cors";
import { graphqlHTTP } from 'express-graphql'
import schema from "./graphql/schema/schema"
import resolvers from "./graphql/resolvers/resolvers"
require("dotenv").config()
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 3001

app.use(cors())


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
}))

const databasePath = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@it2810-43.idi.ntnu.no:27017/personGrabberDB?authSource=personGrabberDB`

mongoose.connect(databasePath)

mongoose.connection.on("error", (err) => {
    throw err
})

app.listen(port, () => {
    console.log(`Hosting on http://localhost:${port}`)
})