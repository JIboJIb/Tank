var salons = [
    {
        name: "a",
        quantitySeats: 10,
        faculty: "microbiology"
    },
    {
        name: "c",
        quantitySeats: 12,
        faculty: "biotechnology"
    },
    {
        name: "d",
        quantitySeats: 13,
        faculty: "chemistry"
    },
    {
        name: "b",
        quantitySeats: 20,
        faculty: "physics"
    }
]
alert(salons)
console.log(salons)

// function chemistry() {
//     return salons[faculty.value("chemistry")]
// }
// function chemistry() {
//     if(salons[faculty.value=="chemistry"]){
//         return
//     }
// }
// console.log(chemistry())
// alert(chemistry)

var group = {
    name: "first",
    students: 13,
    faculty: "microbiology"
}

function quantityFor() {
    if (salons[quantitySeats] >= group.students)
        return///шо вернути?
}

// salons.sort((a, b) => {
//     return a.quantitySeats - b.quantitySeats
// })


salons.sort(function (a, b) {
    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    if (nameA < nameB)
        return -1
})
console.log(salons)

