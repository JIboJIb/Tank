let a = Number(prompt("введіть кількість секунд"));
function time() {
    var hours = Math.floor(a / 3600)
    var minutes = Math.floor((a % 3600) / 60)
    var seconds = a % 3600 % 60
    return hours + ":" + minutes + ":" + seconds
}
alert(time())