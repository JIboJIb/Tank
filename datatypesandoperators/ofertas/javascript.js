let number = prompt("Сума покупки")
if (number >= 200 && number <= 299) {
    let oferta = number - number * 0.03
    alert("Ціна зі знижкою  " + oferta)
}
else if (number >= 300 && number <= 499) {
    let oferta = number - number * 0.05
    alert("Ціна зі знижкою  " + oferta)
}
else if (number >= 500) {
    let oferta = number - number * 0.07
    alert("Ціна зі знижкою  " + oferta)
}