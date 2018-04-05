const data = require('../test-assets/testData')
const selector = require('../test-assets/selectors')

let userSignOut = (browser, value) => {
    browser

        .pause(2000)
        .assert.title(data.titlepage)
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')
        .verify.elementPresent(selector.logo)
        .assert.visible(selector.logo)
        .verify.containsText(selector.logo, 'Amazon')

        .useXpath()
        .moveToElement(selector.accList, 10, 30)
        .click(selector.accList)
        .pause(2000)
        .waitForElementPresent(selector.accList, 1000)
        .verify.elementPresent(selector.accList)
        .assert.visible(selector.accList)
        .verify.containsText(selector.accList, data.account)

        .useCss()
        .pause(1000)
        .click(selector.singOutBut)
        .pause(2000)

}

module.exports = {
    userSignIn: userSignIn,

}