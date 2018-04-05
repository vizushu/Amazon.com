const data = require('../test-assets/testData')
const selector = require('../test-assets/selectors')


let userSignIn = (browser, value) => {
    browser
        .assert.title(data.titlepage)
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')
        .verify.elementPresent(selector.logo)
        .assert.visible(selector.logo)
        .verify.containsText(selector.logo, 'Amazon')

        .useXpath()
        .waitForElementPresent(selector.accList, 1000)
        .verify.containsText(selector.accList, data.account)
        .click(selector.accList)
        .pause(5000)

        .useCss()
        // .waitForElementPresent(selector.amaIcon, 4000)
        .verify.elementPresent(selector.amaIcon)
        .assert.visible(selector.amaIcon)

        .verify.elementPresent(selector.inputEmail)
        .click(selector.inputEmail)
        .setValue(selector.inputEmail, data.username)
        .verify.value(selector.inputEmail, data.username)
        .click(selector.continueBut)
        .pause(2000)
        .waitForElementPresent(selector.inputPass, 1000)
        .verify.elementPresent(selector.inputPass)
        .assert.visible(selector.inputPass)
        .click(selector.inputPass)
        .setValue(selector.inputPass, data.password)
        .verify.value(selector.inputPass, data.password)

        .pause(5000)
        .assert.title("Amazon Sign In")
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')
        .waitForElementPresent(selector.signInBut, 1000)
        .verify.elementPresent(selector.signInBut)
        .assert.visible(selector.signInBut)
        .verify.containsText(selector.signinText, 'Sign in')
        .click(selector.signInBut)
        .waitForElementPresent('body', 5000)


}

module.exports = {
    userSignIn: userSignIn,

}