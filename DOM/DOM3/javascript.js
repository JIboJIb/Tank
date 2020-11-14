var circles = document.querySelectorAll('.semaphore');
console.log(circles)
let activeLight = 0;
var button = document.getElementById("light")

function changeLight() {
    circles[activeLight].className = "semaphore";
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }
    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}

button.onclick = changeLight