function comparsion() {
    let a = Number(prompt("введіть перше число"));
    let b = Number(prompt("введіть друге число"));
    if (a < b) {
        alert("-1")
    }
    else if (a > b) {
        alert("1")
    }
    else {
        alert("0")
    }
}
comparsion()