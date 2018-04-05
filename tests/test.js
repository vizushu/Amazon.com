const selector = require('../test-assets/selectors')
const functions = require('../test-assets/smokeTest')
const data = require('../test-assets/testData')

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.amazon.com')
            .maximizeWindow()
            .waitForElementPresent('body', 1000)

    },
    after: browser => {
        browser
            .waitForElementPresent('body', 1000)
            .end()
    },

    'Smoke Test': browser => {
        functions.didpageLoad(browser)
        functions.mainContent(browser)
        functions.userSignIn(browser)
        functions.userSignOut(browser)
    },

    'As a user I would like to sign in': browser => {
        functions.didpageLoad(browser)
        functions.userSignIn(browser)
    },

    'As a user I would like to sign out': browser => {
        functions.didpageLoad(browser)
        functions.userSignIn(browser)
        functions.userSignOut(browser)
    },
    'As a user I would like to create my own account': browser => {
        functions.didpageLoad(browser)
        functions.userCreation(browser)
    }



}
