const data = require('../test-assets/testData')
const selector = require('../test-assets/selectors')


let didpageLoad = (browser, value) => {
    browser
        .assert.title(data.titlepage)
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')
        .verify.elementPresent(selector.logo)
        .assert.visible(selector.logo)
        .verify.containsText(selector.logo, 'Amazon')
}

let mainContent = (browser, value) => {
    browser
        
        .waitForElementPresent(selector.streamNav, 2000)
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
        .waitForElementPresent(selector.accList, 1000)
        .verify.containsText(selector.accList, data.account)
        
}

let userSignIn = (browser, value) => {
    browser

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

let userSignOut = (browser, value) => {
    browser
     
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

// let userOrder = (browser, value) => {
//     browser

//         .
// }

module.exports = {
    mainContent: mainContent,
    userSignIn: userSignIn,
    userSignOut: userSignOut,
    didpageLoad: didpageLoad,
}