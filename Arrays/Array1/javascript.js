var milk = {
    name: "milk",
    quantity: 3,
    bought: true
}

var bread = {
    name: "bread",
    quantity: 1,
    bought: false
}

var water = {
    name: "water",
    quantity: 1,
    bought: true
}

var salt = {
    name: "salt",
    quantity: 1,
    bought: false
}

var juice = {
    name: "juice",
    quantity: 2,
    bought: true
}

var list = [milk, bread, water, salt, juice]

console.log(list)

list.sort((a, b) => {
    return a.bought - b.bought
})

//alert(list)

var apple = {
    name: "apple",
    quantity: 5,
    bought: false
}

list.push(apple)

console.log(list)

list[salt.bought = true]
console.log(list)