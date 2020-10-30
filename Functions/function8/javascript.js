var a = +prompt("Введіть години");
var b = Number(prompt("Введіть хвилини"));
var c = Number(prompt("Введіть секунди"));
function seconds() {
    return (a * 3600 + b * 60 + c)
}
console.log(a)
console.log(seconds)
alert(seconds())