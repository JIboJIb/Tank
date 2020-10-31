let time = {
    hours: 12,
    minutes: 25,
    seconds: 10
}

function show() {
    return time.hours + ":" + time.minutes + ":" + time.seconds
}
alert(show())

function secondsPlus() {
    var a = parseInt(prompt("Скільки секунд додати?"))
    if (a >= 60) {
        return parseInt(time.hours) + ":" + parseInt(time.minutes) + Math.floor(a / 60) + ":" + parseInt(time.seconds) + a + a % 60
    }
}
console.log(typeof (a))
//console.log(typeof (time.hours))

alert(secondsPlus())