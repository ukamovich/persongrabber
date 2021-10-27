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

# Why Redux?
We were given two major options for handling state management to implement in our front-end application: Redux and MobX. After reading about the differences of these two libraries, we decided to try Redux. Yet, some argue that MobX is easier to understand and implement as a starter. This is because MobX is inspired by object-oriented programming, which is a more familiar concept for beginner developers.

In turn, Redux is inspired by the concepts of functional programming, frequently used with React, and the debugging process (e.g., using ‘Redux DevTools’ extension for Firefox) is more convenient, compared to MobX, due to the usage of pure functions and less abstraction.

In Redux, the whole global state of an app is stored in an object tree inside a single store. In order to change the state tree, an action ( an object that describes “what happened”) must be created and dispatched to the store. A special function - reducer - returns a new state, based on the old state and the action.

!!! Describe Redux in our app!!!

# UI components and libraries
We have mainly used components from the [MUI-library](https://mui.com/). The library has a wide variety of components which are easy to implement in the design and that’s why we sticked with this library throughout the project. Another great advantage of the MUI-components is that they offer inline styling which makes it more convenient to change the component regarding mediaQueries or just CSS. As an example, we were able to reduce the amount of <div>-tags due to the <Box> component since we can perform CSS inline instead of creating a separate CSS-file for styling the <div>-tag.

When the inline styling were not enough to alter the component the way we wanted, we used ThemeProvider and UseTheme to style the component in a specific way by creating a separate component which we named Themes.tsx.

# Universal desgin

# Testing
