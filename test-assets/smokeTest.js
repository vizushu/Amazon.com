const data = require('../test-assets/testData')

let didpageLoad = (browser, value) => {
    let homepage = browser.page.homePage();
    homepage.navigate()
    homepage
        .assert.title(data.titlepage)
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')
        .verify.elementPresent('@logo')
        .assert.visible('@logo')
        .verify.containsText('@logo', 'Amazon')
}


let mainContent = (browser, value) => {
    let maincontent = browser.page.homePage();
    maincontent.navigate()
    maincontent
        .waitForElementPresent('@streamNav', 2000)
        .verify.elementPresent('@streamNav')
        .assert.visible('@streamNav')
        .waitForElementPresent('@banner', 1000)
        .verify.elementPresent('@banner')
        .assert.elementPresent('@banner')
        .waitForElementPresent('@deals', 1000)
        .verify.elementPresent('@deals')
        .assert.elementPresent('@deals')
        .verify.containsText('@deals', data.deals)
        .waitForElementPresent('@lowPrice', 1000)
        .verify.elementPresent('@lowPrice')
        .assert.elementPresent('@lowPrice')
        .verify.containsText('@lowPrice', data.lowprice)
        .waitForElementPresent('@lowPrice', 1000)
        .verify.elementPresent('@lowPrice')
        .assert.elementPresent('@lowPrice')
        .verify.containsText('@lowPrice', data.lowprice)

        .waitForElementPresent('@accList', 1000)
        .verify.containsText('@accList', data.account)

}

let userSignIn = (browser, value) => {
    let signin = browser.page.homePage();
    signin.navigate()
    signin
        .waitForElementPresent('@accList', 1000)
        .verify.containsText('@accList', data.account)
        .click('@accList')
    browser
        .pause(2000)
    signin
        // .waitForElementPresent('@amaIcon', 4000)
        // .verify.elementPresent('@amaIcon')
        // .assert.visible('@amaIcon')

        .verify.elementPresent('@inputEmail')
        .click('@inputEmail')
        .setValue('@inputEmail', data.username)
        .verify.value('@inputEmail', data.username)
        .click('@continueBut')
    browser
        .pause(2000)

    signin
        .waitForElementPresent('@inputPass', 1000)
        .verify.elementPresent('@inputPass')
        .assert.visible('@inputPass')
        .click('@inputPass')
        .setValue('@inputPass', data.password)
        .verify.value('@inputPass', data.password)

    browser
        .pause(5000)

    signin
        .assert.title("Amazon Sign In")
        .assert.urlContains(data.url)
        .waitForElementPresent('body', 1000)
        .assert.visible('body')
        .waitForElementPresent('@signInBut', 1000)
        .verify.elementPresent('@signInBut')
        .assert.visible('@signInBut')
        .verify.containsText('@signinText', 'Sign in')
        .click('@signInBut')
        .waitForElementPresent('body', 5000)

}

let userSignOut = (browser, value) => {
    let signout = browser.page.homePage();
    signout.navigate()
    signout
        .moveToElement('@accList', 10, 30)
        .click('@accList')
    browser
        .pause(2000)
    signout
        .waitForElementPresent('@accList', 1000)
        .verify.elementPresent('@accList')
        .assert.visible('@accList')
        .verify.containsText('@accList', data.account)
    browser
        .pause(1000)
    signout
        .click('@singOutBut')
    browser
        .pause(2000)
}
// }

// // let userOrder = (browser, value) => {
// //     browser

// //         .
// // }


let userCreation = (browser, value) => {
    let usercreate = browser.page.homePage();
    usercreate.navigate()
    usercreate
        .click('@accList')
    browser
        .pause(2000)
    usercreate
        .assert.visible('@amaIcon')
        .assert.title('Amazon Sign In')
        .verify.elementPresent('@cr8Acc')
        .verify.containsText('@cr8Acc', 'Create your Amazon account')
        .click('@cr8Acc')
        // .waitForElementPresent('@amaIcon', 2000)
        // .assert.visible('@amaIcon')
        .assert.title('Amazon Registration')

        .verify.elementPresent('@newNameInput')
        .assert.visible('@urName')
        .verify.containsText('@urName', 'Your name')

        .verify.elementPresent('@newEmailInput')
        .assert.visible('@urEmail')
        .verify.containsText('@urEmail', 'Email')

        .verify.elementPresent('@newPassInput')
        .assert.visible('@urPass')
        .verify.containsText('@urPass', 'Password')

        .verify.elementPresent('@rePassInput')
        .assert.visible('@urRePass')
        .verify.containsText('@urRePass', 'Re-enter password')

}   
module.exports = {
    mainContent: mainContent,
    userSignIn: userSignIn,
    userSignOut: userSignOut,
    didpageLoad: didpageLoad,
    userCreation: userCreation,
}