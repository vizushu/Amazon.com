const functions = require('../test-assets/functions')
const selector = require('../test-assets/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.amazon.com')
            .waitForElementPresent('body', 1000)
    },
    after: browser => {
        browser
            .end()
    },
    // 'Even and Odd test' : browser => {functions.evenOdd(browser)},
   
    'Smoke Test' : browser => {
        browser
            // .assert.title('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
            // .assert.urlContains('https://www.amazon.com/')
            // .waitForElementPresent('body', 1000)
            // .assert.visible('body')
            // .verify.elementPresent(selector.logo)
            // .assert.visible(selector.logo)
            // .verify.containsText(selector.logo, 'Amazon')
            // .waitForElementPresent(selector.streamNav, 1000)
            // .verify.elementPresent(selector.streamNav)
            // .assert.visible(selector.streamNav)
            // .waitForElementPresent(selector.banner, 1000)
            // .verify.elementPresent(selector.banner)
            // .assert.elementPresent(selector.banner)
            // .waitForElementPresent(selector.deals, 1000)
            // .verify.elementPresent(selector.deals)
            // .assert.elementPresent(selector.deals)
            // .verify.containsText(selector.deals, 'Deals recommended for you')
            // .waitForElementPresent(selector.lowPrice, 1000)
            // .verify.elementPresent(selector.lowPrice)
            // .assert.elementPresent(selector.lowPrice)
            // .verify.containsText(selector.lowPrice, 'Low-price home décor with free shipping')
            // .waitForElementPresent(selector.lowPrice, 1000)
            // .verify.elementPresent(selector.lowPrice)
            // .assert.elementPresent(selector.lowPrice)
            // .verify.containsText(selector.lowPrice, 'Low-price home décor with free shipping')
            


            // .useXpath()
            // .waitForElementPresent(selector.account, 1000)
            // .verify.containsText(selector.account, 'Account & Lists')
    },
    'As a user I would like to sign in' : browser => {
        browser
            // .assert.title('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
            // .assert.urlContains('https://www.amazon.com/')
            // .waitForElementPresent('body', 1000)
            // .assert.visible('body')
            // .verify.elementPresent(selector.logo)
            // .assert.visible(selector.logo)
            // .verify.containsText(selector.logo, 'Amazon')

            .useXpath()
            .waitForElementPresent(selector.account, 1000)
            .verify.containsText(selector.account, ' Account & Lists')

            .useCss()
            .click(selector.account, 1000)
            .waitForElementPresent(selector.amaIcon, 1000)
            .verify.elementPresent(selector.amaIcon)
            .assert.visible(selector.amazonIcon)
            
            
        }
}


