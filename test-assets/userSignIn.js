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
        .verify.containsText(selector.logo, data.amazon)

        .useXpath()
        .waitForElementPresent(selector.account, 1000)
        .verify.containsText(selector.account, data.account)
        .click(selector.account)
        
        .useCss()
        .pause(5000)
        .waitForElementPresent(selector.amaIcon, 2000)
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

}

module.exports = {
    userSignIn: userSignIn,

}