// Name Input field test cases

// INVALID
//  <1 character or empty
// >30 characters. 1234567890qwertyuiop1234567890!@#$%^&*()
// VALID
// between 1-30 characters using alphabets 'Renier John'
// between 1-30 characters using alphabets and numeric 'Renier the 4th'
// between 1-30 characters using alphabets, numeric and special characters '#RenierThe4th!!'
// between 1-30 characters using alphabets and special characters '#TheFourth!!'
// between 1-30 characters using numeric and special characters '#004!!'
validName = {
    nmeAlpha: 'renier john',
    nmeAlphaNum: 'renier the 4th',
    nmeAlnumSpec: '#RenierThe4th!!',
    nmeAlphaSpec: '#Renier',
    numspec: '#004'
}

notvalidName = {
    empty: "",
    moreThan30: '1234567890qwertyuiop1234567890!@#$%^&*()',

}
// Phone Input field test cases:

// VALID
// 10 numeric characters '8182752140'
// INVALID
// <1 numeric character or empty
// <10 numeric characters. 123456789
// >10 numeric characters. 12345678901
// Using alphabets. 'qwertyuiop'
// Using special charactes. '!@#$%^&*()'

validPhone = {
    phneNum: '8182752140'
}

notvalidPhone = {
    phnAlpha: 'qwertyuiop',
    phnSpec: '!@#$%^&*()',
    lessThan10: '123456789',
    moreThan10: '12345678900',
}


// Title Input Field test cases:


// VALID
// between 1-30 characters using alphabets 'CEO'
// between 1-30 characters using alphabets and numeric '2nd Supervisor'
// between 1-30 characters using alphabets, numeric and special characters '#2nd Supervidor'
// between 1-30 characters using alphabets and special characters '#SecondSupervisor!!'
// between 1-30 characters using numeric and special characters '#002!!'
// INVALID
// <1 character or empty
// >30 characters. 1234567890qwertyuiop1234567890!@#$%^&*()

validTitle = {
    tlelAlpha: 'Owner',
    tleAlnum: '2nd Supervisor',
    tleAlnumSpec: '#2nd Supervidor',
    tleAlSpec: '#SecondSupervisor!!',
    tleNumSpec: '#002!!'
}