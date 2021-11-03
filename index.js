function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function roundToInteger(num) {
    return Math.round(num)
}

module.exports = { getRandomNumber, roundToInteger }
