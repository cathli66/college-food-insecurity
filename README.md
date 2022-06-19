# Let's Roll

Let's Roll solves food insecurity for students and local communities around college campuses.

## Inspiration
We realized that on our college campus, a lot of food is waste each day, whether it's food not eaten at the dining halls or food not sold at local restaurants. Additionally, especially at the end of the school year, students are always looking to give away extra food items they did not get the chance to consume. We wanted to create a web app to address both this food waste and student food insecurity on college campuses. 


## What it does
Let's Roll allows students, dining halls, and local restaurants to register accounts to view and post food events. Each food event specifies the provider's contact information and food drop-off location/time in addition to food details so that interested students can plan according to their schedules. Events are displayed based on the provider (student, dining hall, restaurant) and can be filtered by food category and dietary restrictions. 


## How we built it
On the backend, we leveraged Firebase authentication-handling and Firestore databases. The frontend is built using React and Typescript. We also designed the UI using Figma.


## Challenges we ran into
We struggled with integrating the Firebase backend with the frontend. After researching asynchronous calls and promises to retrieve the data, we were able to complete the integration. 

We also struggled to create responsive pages that automatically update with the addition of new backend data. Through research, we learned about useState and useEffect hooks that allowed us to overcome this challenge. 


## Accomplishments that we're proud of
One accomplishment that we’re proud of is being able to pull data from firebase and displaying certain parts of the ui based on it. This allowed us to add a filter feature for the events. As we were able to implement all of the basic features that we wanted to in a short timeframe, we are proud of our final product.


## What we learned
We learned that it is important to design the website in advance and communicate clearly what each person is working on so that merge conflicts may be minimized and work can be completed efficiently. In addition, we developed our technical skills while working with React, Typescript, and Firebase to combine a frontend and a backend with authentication.


## What's next for Let's Roll
As we only had 48 hours to develop this project, we were unable to implement some useful features such as event RSVP. In the future, we would like to implement and refine current and new features for our project and update the UI so that it is more responsive.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Set port
.env
```
PORT=3000
```

## Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
