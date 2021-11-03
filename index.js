function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function roundToInteger(num) {
    const isValidValue = typeof num === "number"

    return isValidValue ? Math.round(num) : 'invalid value'
}

module.exports = { getRandomNumber, roundToInteger }
