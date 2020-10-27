let a = Number(prompt("введіть початок діапазону"));
let b = Number(prompt("введіть кінець діапазону"));
let c = 0;

while (a <= b) {
    c += a;
    a++;
}

alert(c)