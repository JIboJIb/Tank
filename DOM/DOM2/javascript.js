let openWindow = document.getElementById("abrir");
let modalWindow = document.getElementById("div")
let closeWindow = document.getElementById("cerrar")
openWindow.onclick = showDiv;
function showDiv() {
    modalWindow.style.display = "block";
}
closeWindow.onclick = hideDiv;
function hideDiv() {
    modalWindow.style.display = "none"
}