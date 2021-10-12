import express from "express";
import { graphqlHTTP } from 'express-graphql'
import schema from "./graphql/schema/schema"
import resolvers from "./graphql/resolvers/resolvers"
import path from "path"
require("dotenv").config({ path: path.resolve(__dirname + "/../frontend/.env")})

const app = express()
const port = process.env.REACT_APP_BACKEND_PORT
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

app.listen(port, () => {
    console.log(`Hosting on http://localhost:${port}`)
})