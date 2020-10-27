var number = prompt("перевірка на паліндром");
while (number < 10000 || number > 99999) {
    alert('число не підходить')
    var number = prompt("перевірка на паліндром");
}
if (number === number.split("").reverse().join(""))
    alert("паліндром");
else
    alert("не паліндром");