![Property Finder](./images/image.png)
# PROJECT SUMMARY
* This project developed for 'Property Finder' Interview Task
* **[Assignment](./images/Assignment.pdf)** details
* **[Node.js](https://nodejs.org/en/download/current)** was used for package manager
* **[Cypress.io v9.7.0](https://www.cypress.io/)** was used for test tool
* **[Git](https://git-scm.com/downloads)** was used for version control
* **[Cypress-Cucumber](https://www.npmjs.com/package/cypress-cucumber-preprocessor)** framework was used
* **[VsCode](https://code.visualstudio.com/download)** was used as IDE
## Project Structure
* POM structure was used
* **[pages](./cypress/integration/pages)** folder includes page object classes
* **[integration](./cypress/integration)** folder includes feature file
* **[propertyfind](./cypress/integration/propertyfind)** folder includes step definitions
* **[support/index.js](cypress/support/index.js)**, **[plugin/index.js](cypress/plugins/index.js)**, **[cypress.json](./cypress.json)**, **[package.json](./package.json)** files includes project configurations
## Test Execution
* Initially install Node.js with given link at the above
* Then install git with given link at the above
* Clone the project with following code

```
git clone https://github.com/caslanqa/PropertyAssignment.git
```
* Open terminal from the project directory
* Run the following codes
```
npm init -y
```
```
npm i cypress@9.7.0 --save-dev
```
```
npm run propertyFinder
```