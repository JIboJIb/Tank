let day = prompt('Введіть день')
let month = prompt('Введіть місяць')
let year = prompt('Введіть рік')
let newDay
if (day <= 27) {
    newDay = parseInt(day) + 1
}
else if (day == 31 && month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
    newDay = 1
}
else if (day == 30 && month == 4 || 6 || 9 || 11) {
    newDay = 1
}
else if (day == 29 && month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
    newDay = 1
}
else if (day == 28 && month == 2) {
    newDay = 1
}
//else if (day == 28 && month == 2 && !(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
//    newDay = parseInt(day) + 1
//}
//else {
//    newDay = parseInt(day) + 1
//}

let newMonth
if (day < 28) {
    newMonth = month
}
else if (month <= 11 && day == 31 && month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
    newMonth = parseInt(month) + 1
}
else if (month == 12 && day == 31) {
    newMonth = 1
}
else if (day == 30 && month == 4 || 6 || 9 || 11) {
    newMonth = parseInt(month) + 1
}
else if (day == 29 && month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
    newMonth = parseInt(month) + 1
}
else if (day == 28 && month == 2) {
    newMonth = parseInt(month) + 1
}
else {
    newMonth = month
}

let newYear
if (month == 12 && day == 31) {
    newYear = parseInt(year) + 1
}
else {
    newYear = year
}

alert('Наступна дата    ' + newDay + '/' + newMonth + '/' + newYear)