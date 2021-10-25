# How to run project

1. Clone project
2. Run `npm install` in both the backend and frontend folder
3. (optional) create and set .env in frontend. Currently REACT_APP_BACKEND_PORT and PORT can be set.
4. Do `npm start` in both frontend and backend

# GraphQL & API

To develop our own backend, we were obliged to use GraphQL. GraphQL can be described as a new API standard, which is more powerful, flexible and efficient compared to REST. In other words, GraphQL is a query language for APIs and a runtime for executing those queries using a data type system that a client can define himself. In our setup, we have a GraphQL server that connects to a single database. When a client sends a query, which includes the concrete data requirements, to the GraphQL server, the server resolves the query by reading the query's payload and responding with a JSON object where the concrete data requirements are met.

API in GraphQL is organized in terms of types and fields, not endpoints, like it is done in REST API. GraphQL utilizes its own type system that is used to define the capabilities of an API. All the types that are exposed in an API are described in a schema using the so called GraphQL Schema Definition Language (SDL). This schema can be described as a contract between the client and the server and defines how a client can access the data. The collection of our GraphQL types is documented in [schema.ts](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-43/persongrabber/-/blob/master/backend/graphql/schema/schema.ts). This schema defines our GraphQL API.

# MongoDB

To store and maintain our database, we opted for MongoDB Community Edition (NoSQL database), which is free of charge. Our choice of this solution is determined by MongoDB being relatively easy to deploy, administer, and scale. A record in MongoDB is a document (i.e., object), which is similar to a JSON object and consists of field and value pairs. Documents are stored in collections. Last but not least, MongoDB supports GraphQL, which makes the development process easier. Using GraphiQL, we were able to test GraphQL queries and mutations on the deployed database to avoid possible issues, using a well-functioning code intelligence. . We used this [installation guide for Ubuntu 20.04 (Focal)](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) to install MongoDB on VM. To generate mock data for our dataset, we used [Mockaroo](https://mockaroo.com/) service.

# Redux (global state management)


# UI components and libraries

# Web accessibility

# Testing
