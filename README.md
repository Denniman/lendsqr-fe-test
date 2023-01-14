# Lendsqr Assessment task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Please Note:

1. Clicking on the "login in" button on the login page takes you directely to the users page.
2. There's no authentication logic here so one can sign in even without entering any information in the email and password field.

# UI Components

We are following the Atomic Design Pattern for building UI compoments in Confee. See more details here: [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
In short this means we are organising our code into the following structure:

- atoms - Smallest reusable building block of components that don't make sense to break down further. Typical examples are: Buttons, Icons, Logos, Labels, etc.
- molecules - Smaller reusable logical components that are composed of multiple atoms together. Typical examples are Menu, SearchBox, Filter Configuration, etc.
- organisms - Larger pieces of components composed of molecules and atoms. Typical examples are Header, Footer, Layout components, various page sections

## Component structure

The component folder structure will follow this pattern.

```
./Component
    Component.tsx
    Component.scss
    Component.test.tsx
    Component.interface.d.ts
    index.ts
```
