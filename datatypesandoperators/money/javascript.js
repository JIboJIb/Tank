let a = 0.85
let b = 27.66
let c = 1.70
let number = prompt("Введіть суму яку хочете перевести з USD")
let valute = prompt("Введіть валюту у яку хочете перевести (EUR, UAH чи AZN)")
if (valute == "EUR" || valute == "eur") {
    alert(number * a)
}
else if (valute == "UAH" || valute == "uah") {
    alert(number * b)
}
else if (valute == "AZN" || valute == "azn") {
    alert(number * c)
}