var calc = document.getElementById("calc");
calc.onclick = function () {
    do {
        let a = Number(prompt("введіть перше число"));
        let b = prompt("введіть дію, яку хочете виконати");
        let c = Number(prompt("введіть друге число"));
        switch (b) {
            case '+':
                alert(a + c);
                break;
            case '-':
                alert(a - c);
                break;
            case '/':
                alert(a / c);
                break;
            case '*':
                alert(a * c);
            default:
                break;
        }

    } while (confirm('Ще раз?'));
}