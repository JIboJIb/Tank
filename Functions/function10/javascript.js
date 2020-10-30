var a = Number(prompt("Введіть години першої дати"));
var b = Number(prompt("Введіть хвилини першої дати"));
var c = Number(prompt("Введіть секунди першої дати"));
var d = Number(prompt("Введіть години другої дати"));
var e = Number(prompt("Введіть хвилини другої дати"));
var f = Number(prompt("Введіть секунди другої дати"));
function seconds() {
    return (a * 3600 + b * 60 + c)
}
function time() {
    var hours = Math.floor(a / 3600)
    var minutes = Math.floor((a % 3600) / 60)
    var seconds = a % 3600 % 60
    return hours + ":" + minutes + ":" + seconds
}
console.log(time(a, b, c))
console.log(time(d, e, f))
function rest() {
    if (time(a, b, c) > time(d, e, f)) {
        return seconds(a, b, c) - seconds(d, e, f)
    }
    else {
        return seconds(d, e, f) - seconds(a, b, c)
    }
}
console.log(rest())

alert(time(rest()))