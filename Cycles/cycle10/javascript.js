// confirm("Загадайте число")
// var a = confirm("Число більше 50")
// if (a == true) {
//     var a = confirm("Число більше 75?")
//     if (a == true) {
//         var a = confirm("Число більше 87?")
//         if (a == true) {
//             var a = confirm("Число більше 93?")
//             if (a == true) {
//                 var a = confirm("Число більше 96?")
//             }
//             else if (a == false) {
//                 var a = confirm("Число менше 93?")
//                 if (a == false) {
//                     alert("Ваше число 93")
//                 }
//             }
//         }
//         else if (a == false) {
//             var a = confirm("Число менше 87?")
//             if (a == false) {
//                 alert("Ваше число 87")
//             }
//         }
//     }
//     else if (a == false) {
//         var a = confirm("Число менше 75?")
//         if (a == false) {
//             alert("Ваше число 75")
//         }
//     }
// }
// else if (a == false) {
//     var a = confirm("Число менше 50?")
//     if (a == false) {
//         alert("Ваше число 50")
//     }
// }

var a = Number(prompt("Загадайте число"));
var b = 50;
while (a != b) {
    var answer = confirm("число >" + Math.round(b));
    var answer2 = confirm("число <" + Math.round(b));
    var answer3 = confirm("число =" + Math.round(b));
    if (answer) {
        b = (100 - b) / 2 + b
        Math.round(b)
    }
    if (answer2) {
        b = b / 2
        Math.round(b)
    }
    if (answer3) {
        alert("Ваше число" + Math.round(b))
    }

    // if (!answer) {
    //     b = b / 2
    //     Math.round(b)
    // }
    // else if (answer) {
    //     b = b / 2 + b

    // }
}
//поставити мынзначення