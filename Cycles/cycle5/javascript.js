let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
for (i = 0; i < 10; ++i) {
    N = prompt("введіть 10 чисел: ");
    if (N > 0) {
        a++
    }
    if (N < 0) {
        b++
    }
    if (N % 2 == 0) {
        c++
    }
    if (N % 2) {
        d++
    }
    if (N == 0) {
        e++
    }
}
if (c, d > 0) {
    alert("парних :  " + c + "  непарних :  " + d + "  нулів :" + e + "  додатніх :  " + a + "  відємних :  " + b)
}