function sumdel(n) {
    var s = 1
    for (var i = 2; i <= n / 2; i++)
        if (n % i == 0)
            s += i
    return s
}
var n = parseInt(prompt("Введіть натуральне число", 6));
var n = parseInt(prompt("Введіть натуральне число", 6));
function sov(obj) {
    var a = 1
    var b = 5000
    var k = "Совершенные числа в интервале от " + a + " до " + b + "\r\n"
    var l = 0
    for (var j = a; j <= b; j++)
        if (j == sumdel(j)) {
            l++
            if (l > 1) k += "\r\n"
            k += " " + l + ")  " + j
        }
    obj.res.value = k
}
