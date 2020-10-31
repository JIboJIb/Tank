let auto = {
    name: "Opel",
    country: "Germany",
    model: "Vectra",
    year: 2002,
    midvelocity: 90
}

function show() {
    for (key in auto)
        alert(key + "  :  " + auto[key])
}

function time() {
    let distance = Number(prompt("Задайте відстань"))
    let time = distance / auto.midvelocity
    if (time < 1) {
        return time * 60 + "  хвилин"
    }
    else if (time / 4) {
        i = Math.floor(time / 4)
        return time + i + "  годин"
    }
    return time + "годин"
}
alert(show())
alert(time())