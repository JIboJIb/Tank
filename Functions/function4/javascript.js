var a = +prompt('Введіть довжину');
var b = +prompt('Введіть ширину');
function square() {
    if (b != 0) {
        return a * b
    }
    else {
        return a * a
    }
}
alert(square(a, b))
console.log(square())