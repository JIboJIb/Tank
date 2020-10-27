let a = prompt('Введіть число', '')
let b = +prompt('На скілько чисел зсунути')
arr = a.split('');
for (let i = 0; i < b; i++) {
    arr.push(arr.shift())
}
alert(arr.join``);