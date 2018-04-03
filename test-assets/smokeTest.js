const data = require('../test-assets/testData')
const selector = require('../test-assets/selectors')

let smokeTest = (browser, value) => {
    browser
        .assert.title(data.titlepage)
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')

    browser
        .verify.elementPresent(selector.logo)
        .assert.visible(selector.logo)
        .verify.containsText(selector.logo, data.amazon)
        .waitForElementPresent(selector.streamNav, 1000)
        .verify.elementPresent(selector.streamNav)
        .assert.visible(selector.streamNav)
        .waitForElementPresent(selector.banner, 1000)
        .verify.elementPresent(selector.banner)
        .assert.elementPresent(selector.banner)
        .waitForElementPresent(selector.deals, 1000)
        .verify.elementPresent(selector.deals)
        .assert.elementPresent(selector.deals)
        .verify.containsText(selector.deals, data.deals)
        .waitForElementPresent(selector.lowPrice, 1000)
        .verify.elementPresent(selector.lowPrice)
        .assert.elementPresent(selector.lowPrice)
        .verify.containsText(selector.lowPrice, data.lowprice)
        .waitForElementPresent(selector.lowPrice, 1000)
        .verify.elementPresent(selector.lowPrice)
        .assert.elementPresent(selector.lowPrice)
        .verify.containsText(selector.lowPrice, data.lowprice)
        
        .useXpath()
        .waitForElementPresent(selector.account, 1000)
        .verify.containsText(selector.account, data.account)
        .end()
        
}

let userSignIn = (browser, value) => {
    browser
        .pause(5000)
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
        .verify.value(selector.inputPass, data.password)

        .pause(5000)
        .waitForElementPresent(selector.signInBut, 1000)
        .verify.elementPresent(selector.signInBut)
        .assert.visible(selector.signInBut)
        .verify.containsText(selector.signInBut, 'Sign in')
        .click(selector.signInBut)

}
module.exports = {
    smokeTest: smokeTest,
    userSignIn: userSignIn,
}