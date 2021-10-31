# Project Overview
_PersonGrabber_ is an application that diplays information about people stored in a database. Each person has the following attributes: Forname, lastname, gender, age, about and cars. The main functionality of the application is embedded in the search-bar which includes different tools to perform filtering on the search. To perform a filtering, the user can choose to filter on Lastname, Forname or Gender. The portrait of the person reflects wheter the person is male, female or neither. A button that sorts the resulting persons in descending or ascending order according to age has also been included diplayed as an upward or downward arrow. Lastly, _PersonGrabber_ has functionality for generating new persons or cars and add this information to the database. 


Hosted here (need to be connected to NTNU network): 
http://it2810-43.idi.ntnu.no/project3/#/

## How to run it
1. Run `npm install`in both `backend` and `frontend` folders

2. Run `npm start`in both `backend` and `frontend` folders



# GraphQL & API

To develop our own backend, we were obliged to use GraphQL. GraphQL can be described as a new API standard, which is more powerful, flexible and efficient compared to REST. In other words, GraphQL is a query language for APIs and a runtime for executing those queries using a data type system that a client can define himself. In our setup, we have a GraphQL server that connects to a single database. When a client sends a query, which includes the concrete data requirements, to the GraphQL server, the server resolves the query by reading the query's payload and responding with a JSON object where the concrete data requirements are met.

API in GraphQL is organized in terms of types and fields, not endpoints, like it is done in REST API. GraphQL utilizes its own type system that is used to define the capabilities of an API. All the types that are exposed in an API are described in a schema using the so called GraphQL Schema Definition Language (SDL). This schema can be described as a contract between the client and the server and defines how a client can access the data. The collection of our GraphQL types is documented in [schema.ts](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-43/persongrabber/-/blob/master/backend/graphql/schema/schema.ts). This schema defines our GraphQL API.

# MongoDB

To store and maintain our database, we opted for MongoDB Community Edition (NoSQL database), which is free of charge. Our choice of this solution is determined by MongoDB being relatively easy to deploy, administer, and scale. A record in MongoDB is a document (i.e., object), which is similar to a JSON object and consists of field and value pairs. Documents are stored in collections. Last but not least, MongoDB supports GraphQL, which makes the development process easier. Using GraphiQL, we were able to test GraphQL queries and mutations on the deployed database to avoid possible issues, using a well-functioning code intelligence. . We used this [installation guide for Ubuntu 20.04 (Focal)](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) to install MongoDB on VM. To generate mock data for our dataset, we used [Mockaroo](https://mockaroo.com/) service.

# Why Redux?
We were given two major options for handling state management to implement in our front-end application: Redux and MobX. After reading about the differences of these two libraries, we decided to try Redux. Yet, some argue that MobX is easier to understand and implement as a starter. This is because MobX is inspired by object-oriented programming, which is a more familiar concept for beginner developers.

In turn, Redux is inspired by the concepts of functional programming, frequently used with React, and the debugging process (e.g., using ‘Redux DevTools’ extension for Firefox) is more convenient, compared to MobX, due to the usage of pure functions and less abstraction.

In Redux, the whole global state of an app is stored in an object tree inside a single store. In order to change the state tree, an action ( an object that describes “what happened”) must be created and dispatched to the store. A special function - reducer - returns a new state, based on the old state and the action.

We could not really find a useful application for the use of Redux, but ended up settling with have a "clicked" history. What this means is that each time a person is viewed (their card is clicked), they are added to the visited Redux state. This state is used to display a list of "clicked/visited" persons in the footer. We chose to put this list in the footer because it demonstrates how Redux can be useful when passing data around in the hierarchy.

# UI components and libraries
We have mainly used components from the [MUI-library](https://mui.com/). The library has a wide variety of components which are easy to implement in the design and that’s why we sticked with this library throughout the project. Another great advantage of the MUI-components is that they offer inline styling which makes it more convenient to change the component regarding mediaQueries or just CSS. As an example, we were able to reduce the amount of div-tags due to the Box-component since we can perform CSS inline instead of creating a separate CSS-file for styling the div-tag.

When the inline styling were not enough to alter the component the way we wanted, we used ThemeProvider and UseTheme to style the component in a specific way by creating a separate component which we named Themes.tsx.

We have also used bootstrap, a css library with alot of default styling ready to use on basic html components. Both the add person page and the add car page use bootstrap. The add car and person pages use frontend validation in the html components to ensure data submitted is on the correct form before being sent to the backend. When a successfull submit is entered a success message appear and the form is reset to original state.

# Universal design
After reviewing the [guidance for universal design for webpages](https://www.uutilsynet.no/nettsteder/losningsforslag-nettsider/36), we picked and implemented the most relevant and applicable, in our subjective opinion, requirements on our page:

[_Pictures and graphics_](https://www.uutilsynet.no/regelverk/bilder-og-grafikk/205)<br>
Profile pictures play a significant part on our single-page application. The pictures we use are just decorative and contribute to the graphical design of the page. Thus, following the requirement for [decorative pictures](https://www.uutilsynet.no/regelverk/bilder-og-grafikk/205), we keep the alt-attribute empty. Also, we complement each profile picture with a name, age, and gender, which provides a descriptive identification of each person.

[_Colors_](https://www.uutilsynet.no/regelverk/bruk-av-farger/206) and [_contrast_](https://www.uutilsynet.no/wcag-standarden/kontrast/48)<br>
Firstly, we have highlighted the text on the elements that takes the user to the three pages making up the application. Secondly, we have tried to avoid using color combination that is challenging for users that are color blind like green and red. Even though the navbar is green and the color of the profile picture on some persons are red, they are not placed directly together so it won’t be an issue to separate the two. Lastly, the layout is mainly built on the combination of dark and light colors which makes it easier to distinguish content on the page.

[_Clickable elements(Navigation)_](https://www.uutilsynet.no/regelverk/klikkeflate-navigasjon/211)<br>
This requirement is about users that lack precision ability. Our solution takes this matter into account since we are using relatively large-scaled images on both small- and large-scale devices which the user can click on to view a person in detail. Also, the picture of the person is being zoomed in a little bit with a border around it, making it even more distinct and easier to click on for the user. In addition, we have kept the tools regarding searching relatively large so that this won’t be a challenge for users that lack precision ability.


# Testing

**How to run tests**
1. Make sure to be in the folder `frontend`

2. Run `npm test`


**Unit testing**

We used [Enzyme](https://enzymejs.github.io/enzyme/) (JavaScript Testing utility for React) for testing our React components separately. The utility allows to 
render a component, find the necessary elements, and interact with those elements. Tests for navbar, 'Add a new car', and 'Add a new person' can be found [here](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-43/persongrabber/-/tree/master/frontend/src/features/personGrabber/tests).

**Snapshot testing**
We did snapshot testing using [Jest](https://jestjs.io/blog/2016/07/27/jest-14) to render UI components (Footer, Header, AddCarPage, AddPersonPage). A snapshot test takes a screenshot and then compares a recorded screenshot with changes made to the respective component. There are two possible outcomes of such comparison: the change is unexpected; or the screenshot can be upgraded to the newest version of the UI component.


**End-to-end testing**

The objective of end-to-end testing is to test our app for a user’s point of view. The app is treated as a complete black box and the behaviour of the app’s flow is the result of user actions. We aim at testing _PersonGrabber_ using a prolonged sequence of step-by-step actions to cover the app’s flow ”from start to end”. Since we want a user to test our SPA, s/he will be manually executing tests using scenarios by rendering _PersonGrabber_ in a browser (e.g., Chrome or Firefox).

_Scenario 1: Search, sort, and filter_
1. Type appplication URL into the address bar to launch the _PersonGrabber_ page.
2. Examine default sort setup (default: ascending order by age).
3. Click on any person’s card. Check the person's info is displayed.
4. Click on the arrow icon next to the ‘Search’ button to sort the list of persons.
5. Search for a person(s) that contains a ‘jan’ word sequence in their first name.
6. Search for a person(s) that contains a ‘ben’ word sequence in their last name.
7. Search for a person(s) that contains a ‘ben’ word sequence in their last name and is a Male.
8. Search for a person with person id: 617c1a45554583c61718d7cc
9. Search for all persons who are Bigender.


_Scenario 2: Add person and car_
1. Type appplication URL into the address bar to launch the _PersonGrabber_ page.
2. Access ‘Add person’ subpage.
3. Add a new person.
4. Verify that the newly-added person can be found.
5. Access ‘Add car’ subpage.
6. Add a new car for a person named ‘Brynna Branch’ with id: 617c1a45554583c61718d81e
7. Verify that the newly-added car is listed among the cars in the profile for Brynna Branch.

We used [Cypress](https://www.cypress.io/) to conduct automated end-to-end testing. Since relying on the group’s database for testing is bad practice, we generated MOCK data to perform the testing. When we used MOCK data for testing, we learned that Cypress offers useful methods such as _intercept()_ which enables the developer to use MOCK data instead of data from the database. Lastly, Cypress supports functionality for viewing the tests in real time, allowing to see how the application looks like when certain DOM-elements are clicked on. Tests can be found [here](https://gitlab.stud.idi.ntnu.no/it2810-h21/team-43/persongrabber/-/tree/master/frontend/cypress/integration/end-to-end). 

**How to experience Cypress in live mode**
1. Make sure that if you have a .env file in the frontend, REACT_APP_BACKEND_PORT=3001 and REACT_APP_BACKEND_URL=http://localhost

2. Make sure that both _backend_ and _frontend_ are running

3. Make sure to be in the folder `frontend`

4. Run `npx cypress open`





