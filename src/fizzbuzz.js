// TODO: Write your function in this file
function fizzBuzz(lowerNum, upperNum) {
    const fizzBuzzArray = [];
    for (let i = lowerNum; i <= upperNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push('FizzBuzz')
        } else if (i % 3 === 0) {
            fizzBuzzArray.push('Fizz')
        } else if (i % 5 === 0) {
            fizzBuzzArray.push('Buzz')
        } else fizzBuzzArray.push(i)
    }
    return fizzBuzzArray
}
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
