var a = Number(prompt("Введіть години"));
var b = Number(prompt("Введіть хвилини"));
var c = Number(prompt("Введіть секунди"));
function time() {
    if (b < 10) {
        b = "0" + b

    }
    if (c < 10) {
        c = "0" + c
    }
}

time()
alert(a + ":" + b + ":" + c)
console.log(time)
console.log(b)