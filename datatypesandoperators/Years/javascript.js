let year = prompt("Перевірка на високосний рік")
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('Високосний')
}
else {
    alert('не високосний')
}


