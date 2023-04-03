# MERN Practice

This project is think for technologies practice as EXPRESS, MONGODB, REACT, TYPESCRIPT

## Dependences

Dotenv: This dependences is for accede a the variables of the file .env

Express: This dependeces is for the create routes 

## Dev-Dependences

TypeScript: it serve for have a typed language

Node || Nodemon: It serve for ejecute code in time real.

Jest: It serve for teste code in TP or JS

Eslint: Is an open source project that helps you find and fix problems with your JavaScript or TypeScrip code.

Concurrently: This dependence serve for the automatition of code of shape simultaneous.

WebPack: Is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.

## Script NPM

build: "npx tsc" => it build the code TS a JS 

start: "node dist/index.js" => run the code JS with Node

dev: "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js \" " => this script wait some change in the code and run nodemon in the folder dist file index.js

test: "jest" => This script sirve for teste the code

serve:coverage: "npm run test && cd coverage/lcov-report && npx serve" => run the tests and generate a report


## Environment variable .env

 PORT=8000
