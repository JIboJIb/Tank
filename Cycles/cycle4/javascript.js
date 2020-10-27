let a = (prompt("введіть любе число"));
function getDigitAmount(n) {
    var c = 0;
    while (c < n.length) c++;
    return c;
}
alert(getDigitAmount(a));