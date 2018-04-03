

// let filterName = (browser, selector, value) => {
//     browser
//         .waitForElementVisible('input[id="nameFilterInput"]', 3000)
//         .setValue('input[id="nameFilterInput"]', "J")
//         .click('button[id="nameFilterButton"]')
//         .expect.element('span[name="nameFilterResults"]').text.to.equal('Filtered Names: [ "James", "Jessica", "Jennifer" ]')

// }
// let evenOdd = (browser, selector, value) => {
//     browser
//         .waitForElementVisible('input[name="evenOddInput"]', 3000)
//         .setValue('input[name="evenOddInput"]', '2, 4, 6, 8')
//         .pause(5000)
//         .click('button[name="evenOddButton"]')
//         .pause(5000)

// }
// let filterObj = (browser, selector, value) => {
//     browser
//         .waitForElementVisible('input[name="objectFilterInput"]', 3000)
//         .setValue('input[name="objectFilterInput"]', "hairColor")
//         .click('button[name="objectFilterButton"]')
//         .expect.element('span[name="objectFilterResults').text.to.equal('Filtered: [ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
// }
// let palindrome = (browser, selector, value) => {
//     browser
//         .waitForElementVisible('input[name="palindromeInput"]', 3000)
//         .setValue('input[name="palindromeInput"]', "reinier")
//         .click('button[name="palindromeButton"]')
//         .expect.element('span[name="palindromeResults"]').text.to.equal('Palindrome: true')
// }
// let sum = (browser, selector, value) => {
//     browser
//         .waitForElementVisible('input[name="sumInput1"]', 3000)
//         .setValue('input[name="sumInput1"]', "1")
//         .setValue('input[name="sumInput2"]', "2")
//         .click('button[name="sumButton"')
//         .expect.element('span[name="sumResults"]').text.to.equal('Sum: 3')
// }

module.exports = {
    filterObj: filterObj,
    evenOdd: evenOdd,
    filterName: filterName,
    palindrome: palindrome,
    sum: sum
}