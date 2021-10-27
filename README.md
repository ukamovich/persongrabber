# About the webpage


# GraphQL & API

To develop our own backend, we were obliged to use GraphQL. GraphQL can be described as a new API standard, which is more powerful, flexible and efficient compared to REST. In other words, GraphQL is a query language for APIs and a runtime for executing those queries using a data type system that a client can define himself. In our setup, we have a GraphQL server that connects to a single database. When a client sends a query, which includes the concrete data requirements, to the GraphQL server, the server resolves the query by reading the query's payload and responding with a JSON object where the concrete data requirements are met.

API in GraphQL is organized in terms of types and fields, not endpoints, like it is done in REST API. GraphQL utilizes its own type system that is used to define the capabilities of an API. All the types that are exposed in an API are described in a schema using the so called GraphQL Schema Definition Language (SDL). This schema can be described as a contract between the client and the server and defines how a client can access the data. The collection of our GraphQL types is documented in [schema.ts](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-43/persongrabber/-/blob/master/backend/graphql/schema/schema.ts). This schema defines our GraphQL API.

# MongoDB

To store and maintain our database, we opted for MongoDB Community Edition (NoSQL database), which is free of charge. Our choice of this solution is determined by MongoDB being relatively easy to deploy, administer, and scale. A record in MongoDB is a document (i.e., object), which is similar to a JSON object and consists of field and value pairs. Documents are stored in collections. Last but not least, MongoDB supports GraphQL, which makes the development process easier. Using GraphiQL, we were able to test GraphQL queries and mutations on the deployed database to avoid possible issues, using a well-functioning code intelligence. . We used this [installation guide for Ubuntu 20.04 (Focal)](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) to install MongoDB on VM. To generate mock data for our dataset, we used [Mockaroo](https://mockaroo.com/) service.

# Why Redux?
We were given two major options for handling state management to implement in our front-end application: Redux and MobX. After reading about the differences of these two libraries, we decided to try Redux. Yet, some argue that MobX is easier to understand and implement as a starter. This is because MobX is inspired by object-oriented programming, which is a more familiar concept for beginner developers.

In turn, Redux is inspired by the concepts of functional programming, frequently used with React, and the debugging process (e.g., using ‘Redux DevTools’ extension for Firefox) is more convenient, compared to MobX, due to the usage of pure functions and less abstraction.

In Redux, the whole global state of an app is stored in an object tree inside a single store. In order to change the state tree, an action ( an object that describes “what happened”) must be created and dispatched to the store. A special function - reducer - returns a new state, based on the old state and the action.

**!!! Describe Redux in the app!!!**

# UI components and libraries
We have mainly used components from the [MUI-library](https://mui.com/). The library has a wide variety of components which are easy to implement in the design and that’s why we sticked with this library throughout the project. Another great advantage of the MUI-components is that they offer inline styling which makes it more convenient to change the component regarding mediaQueries or just CSS. As an example, we were able to reduce the amount of `<div>`-tags due to the `<Box>` component since we can perform CSS inline instead of creating a separate CSS-file for styling the `<div>`-tag.

When the inline styling were not enough to alter the component the way we wanted, we used ThemeProvider and UseTheme to style the component in a specific way by creating a separate component which we named Themes.tsx.

# Universal design
After reviewing the [guidance for universal design for webpages](https://www.uutilsynet.no/nettsteder/losningsforslag-nettsider/36), we picked and implemented the most relevant and applicable, in our subjective opinion, requirements on our page:

[_Pictures and graphics_](https://www.uutilsynet.no/regelverk/bilder-og-grafikk/205) <br>
Profile pictures play a significant part on our single-page application. The pictures we use are just decorative and contribute to the graphical design of the page. Thus, following the requirement for [decorative pictures](https://www.uutilsynet.no/regelverk/bilder-og-grafikk/205), we keep the alt-attribute empty. Also, we complement each profile picture with a name, age, and gender, which provides a descriptive identification of each person.

[_Colors_](https://www.uutilsynet.no/regelverk/bruk-av-farger/206) and [_contrast_](https://www.uutilsynet.no/wcag-standarden/kontrast/48) <br>
Firstly, we have highlighted the text on the elements that takes the user to the three pages making up the application. Secondly, we have tried to avoid using color combination that is challenging for users that are color blind like green and red. Even though the navbar is green and the color of the profile picture on some persons are red, they are not placed directly together so it won’t be an issue to separate the two. Lastly, the layout is mainly built on the combination of dark and light colors which makes it easier to distinguish content on the page.

[_Clickable elements(Navigation)_](https://www.uutilsynet.no/regelverk/klikkeflate-navigasjon/211) <br>
This requirement is about users that lack precision ability. Our solution takes this matter into account since we are using relatively large-scaled images on both small- and large-scale devices which the user can click on to view a person in detail. Also, the picture of the person is being zoomed in a little bit with a border around it, making it even more distinct and easier to click on for the user. In addition, we have kept the tools regarding searching relatively large so that this won’t be a challenge for users that lack precision ability.

**!!! Additional; discuss the size of the pagination buttons since they are possible too small for users that lacks precision ability.!!!**


# Testing
