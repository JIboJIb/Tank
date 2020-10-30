// function Factorial() {
//     var a = Number(prompt("Введіть число"))
//     for (i = 1; i <= a; i++) {
//         n *= i
//         return n
//     }
//     alert(a)
// }
function factorial(n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
}
var a = +prompt('Введіть число');
alert(factorial(a));