var n = parseInt(prompt("Введіть натуральне число", 6));
var sum = n - 1;
var temp = n;
function perfect() {
    for (var i = 2; n > 1;) {
        if (!(n % i)) {
            sum -= i;
            n = n / i;
        } else i++;
    }

    if (!sum)
        alert("Число: " + temp + " являеться ідеальним");
    else
        alert("Число: " + temp + " не является ідеальним");
}