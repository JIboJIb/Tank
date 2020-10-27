let a = Number(prompt("введіть любе число"));
let b = Number(prompt("введіть ще одне число"));
//while (a != 0) and(b != 0)
//if (a > b) {
//    a = a % b
//}
//else {
//    b = b % a
//}
while (a != b) {
    if (a > b) {
        a -= b
    }
    else {
        b -= a
    }
}
alert(a)