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
    },
    // 'Smoke Test' : browser => {functions.smokeTest(browser)},
    'As a user I would like to sign in' : browser => {functions.userSignIn(browser)},
    'As a user I would like to sign out': browser => {functions.userSignOut(browser)},
   

            
}


