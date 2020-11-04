var checklist = [
    {
        name: "milk",
        quantity: 3,
        price: 0.9
    }, {
        name: "bread",
        quantity: 1,
        price: 1.5
    }, {
        name: "water",
        quantity: 1,
        price: 0.75
    }, {
        name: "salt",
        quantity: 1,
        price: 1
    }, {
        name: "juice",
        quantity: 2,
        price: 1.2
    }
]
alert(checklist)
console.log(checklist)

function plus() {
    return checklist[0].quantity * checklist[0].price + checklist[1].quantity * checklist[1].price + checklist[2].quantity * checklist[2].price + checklist[3].quantity * checklist[3].price + checklist[4].quantity * checklist[4].price
}
//цикл???
console.log(plus())

function rich() {
    checklist.sort((a, b) => {
        return a.quantity * a.price - b.quantity * b.price
    })
}
console.log(checklist[0])
alert(checklist[0])

// function midPrice() {
//     for (let i = 0; i <= checklist.length; i++) {
//         var multi = i.quantity * i.price + i.quantity * i.price
//         return multi
//     }
//     var midprice = multi / checklist.length + 1
//     return midprice
// }
// console.log(i)
// console.log(multi)
// console.log(midPrice)

//шо не так??

function midPrice() {
    return (checklist[0].quantity * checklist[0].price + checklist[1].quantity * checklist[1].price + checklist[2].quantity * checklist[2].price + checklist[3].quantity * checklist[3].price + checklist[4].quantity * checklist[4].price) / (checklist.length + 1)
}

console.log(midPrice())
console.log(checklist.length)