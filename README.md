# saucedemoAssessment

## Description

This is a cypress project implemented to provide automated testing for https://www.saucedemo.com/. 
Note: Prerequisites and installation parts are for Windows. 

## Table of Contents 

- [Installation](#installation)
- [Project Overview](#projectoverview)
- [Testing implementation approach](#testingimplementationapproach)
- [Tests execution](#testsexecution)
- [Github Workflow](#githubworkflows)
- [To be improved/enhanced](#tobeimproved/enhanced)
- [Useful documentation](#usefuldocumentation)

## Installation

In order to be able to check project locally and execute tests, below installations are required.

1. Download and install node.js.
2. Install Yarn package manager:

```bash
npm install --global yarn
```

npm is the package manager that comes bundled with node.js.

3. Clone the repository:

```bash
git clone https://github.com/KaterinaDimogiorgi/saucedemoAssessment.git
```

4. Open project in your preferred IDE and run yarn to install all the dependencies of the project:

```bash
yarn 

or 

yarn install
```

## Project Overview

Under cypress folder of the project, you may find all the e2e tests in the e2e folder.

- AuthentificationE2E.spec.cy.ts 
  Testing the login functionality of the website.
- MenuNavigationE2E.spec.cy.ts
  Testing the burger menu of the website and its items.
- OrderProductE2E.spec.cy.ts
  Testing the ordering of products in the website.
- ProductsPageOverviewE2E.spec.cy.ts
  Testing the products overview and shoping cart of the website.

In support folder, all page objects, components and custom commands are stored.
In the fixtures, all data related to the user login and personal info are stored.
In the reports, the report from the execution of the tests is stored.
All json files under root contain configuation regarding reporting, dependencies, cypress, typescript, linting.

## Testing implementation approach

The structure and implementation of the pages, components and tests follow the page object model.
Each page object(found in pages), contains all possible actions and elements in a page the website visitor encounters.

Example: LandingPage.ts contains all the actions and elements of the initial landing page the visitor encounters upon loading website.

Similarly, every component of the page follows the same logic.

Example: LogInFormComponent.ts contains all the actions and elements releated to the log in form of the landing page.

## Tests execution

The are 2 possible ways to execute the e2e tests of the project locally.

1. Opening Cypress and selecting the browser and test file to be executed.

```bash
yarn cy:open
```

2. Running all tests without Cypress opening, with a report at the end depicted the results.

```bash
yarn cy:run
```

Both commands are custom commands defined in scripts in package.json.
In cy:run, chrome has been selected as the desired browser and mochawesome as the reporter.

## Github Workflow

Under the ./github folder of the project, there is main.yml where a worklfow to run the cypress tests and 
publish report of the results is configured. 

The workflow is triggered on push to master and pull request types defined. 
Additionally, the 'Run Cypress tests on CI' workflow has a workflow_dispatch event trigger in order to trigger it directly from github actions
and view results and reports without having to make changes to the project.

In order to manually trigger the workflow from the repository on Github:

1. Select Actions tab.
2. On the left side bar under actions, select 'Run Cypress tests on CI' workflow. 
3. Select 'Run workflow' button on the top right of the runs grid.
4. Confirm Run workflow on master on popup.
5. Upon completion, select the workflow run and you may view a cypress-run summary in the bottom.
6. Additionally, in the artifacts you may download the moachawesome report and open the included html file on your browser.


## Useful documentation

- Node.js: 
 https://nodejs.org/en/download
 https://www.geeksforgeeks.org/installation-of-node-js-on-windows/
- Yarn: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
- Cypress:https://docs.cypress.io/guides/overview/why-cypress
- Mochawesome: https://medium.com/@iMayank.Shekhar/cypress-generate-tests-reports-using-mochawesome-cf829d083d51