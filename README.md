# Smart billing

## Description
This is a simple Angular application that demonstrates fetching data from an API and displaying it in a UI. The application fetches billing address data from a JSON API and renders it in a smart card component

## Prerequisites
To run and develop this application, you need to have the following tools installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher recommended)
- [Angular CLI](https://angular.io/cli) (version 17.x or higher)
- [npm](https://www.npmjs.com/get-npm)
## Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/kiuvert39/smart.git
cd smart
npm install
ng serve 
```   


#  Unit Testing
##  Dependencies
- Jasmine: Behavior-driven development framework for testing JavaScript code.
-  Karma: Test runner for executing unit tests while providing a browser environment.
-  Angular Testing Utilities: Angular provides utilities for testing components, services, directives, pipes, and more.

##  Running Tests
>   To run unit tests, execute the following command in the terminal:

```bash
ng test
```
##  Generating Code Coverage
To generate code coverage reports alongside the unit tests, use the --code-coverage flag:

```bash
ng test --code-coverage
```

##  Additional Notes

- The application uses Angular CLI for project scaffolding and development.
-   Data is fetched from a remote API endpoint 
 * https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json
	* https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json
- Unit tests are included for components and services. You can run tests using ng test.
-   Test coverage reports can be generated using ng test --code-coverage.


>after deploying building and deploying on a node server the final result was hosted on render below is the live link
-   https://smart-billing.onrender.com