# Login Automation Test
Testing of login feature using Cypress and Cucumber for testing e2e
## 1. Installation

We will use a simple cypress application. To check any cypress dependencies please refer to https://docs.cypress.io/guides/getting-started/installing-cypress.


## 2. Usage

- To run the cypress test please use the command line below. You will get a pop up with the cypress test runner.
  ```
  npm run test
  ```
  The cypress test runner will show the integration tests createad. You will be able to run the integration test with the button "Run 1 integration spec".
- Optionally, you can select in the upper right corner dropdown Firefox or Chrome. 
- Once Cypress finish the tests it will show a report with the specs and a checkmark that shows that the test passed. Hovering the mouse for each step let you travel time to different steps.
### 3. Important Files

- cypress/fixtures: credentials data used for our test
    - loginData.fixture.json
- cypress/integration/login: automation script to validate the requested scenario
    - login.spec.js
- cypress/integration: feature file with the provided scenario written in Gherking language
    - login.feature
- cypress/plugins: Cucumber plugin is set up
    - index.js
- cypress/support/pageObjects: Page class with locators of the WebElements used in test
    - global/global.js
    - login/login.js

### 4. Assumptions
- Automation testing only cover desktop breakpoints:  "viewportHeight": 768,
"viewportWidth": 1366


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
