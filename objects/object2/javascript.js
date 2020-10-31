// let arriba = {
//     topOne: 3,
//     topTwo: 5
// }

// let bot = {
//     botOne: 5,
//     botTwo: 6
// }

// function plus() {
//     a = bot.botOne * bot.botTwo
//     return arriba.topOne * (a / bot.botOne) + arriba.topTwo * (a / bot.botTwo) + "/" + a
// }
// alert(plus())

// function minus() {
//     a = bot.botOne * bot.botTwo
//     return arriba.topOne * (a / bot.botOne) - arriba.topTwo * (a / bot.botTwo) + "/" + a
// }
// alert(minus())

// function multi() {
//     return arriba.topOne * arriba.topTwo + "/" + bot.botOne * bot.botTwo
// }
// alert(multi())

// function antimulti() {
//     return arriba.topOne * bot.botTwo + "/" + bot.botOne * arriba.topTwo
// }
// alert(antimulti())
let a = 8
let b = 16
let i = 2
while (a % i == 0 && b % i == 0) {
    i++
}
while (a % i == 0 && b % i == 0) {
    a = a % i
    b = b % i
}
alert(a)
alert(b)