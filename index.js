// Code your solution here
function findMatching(drivers, string) {
    const answer = drivers.filter(function (element) {
        return string.toUpperCase() === element.toUpperCase()
    })
    if (answer) {
        return answer
    }
}
function fuzzyMatch(drivers, string) {
    const samechar = drivers.filter(function (element) {
        return string.substring(0, 1) === element.substring(0, 1)
    })
    if (samechar) {
        return samechar
    }
}
function matchName(drivers, string) {
    const check = drivers.filter(function (element) {
        return string === element.name
    })
    return check
}