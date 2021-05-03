let carros = [{
        marca: 'toyota',
        modelo: 'corolla',
        año: 2021,
        precio: 30000
    },
    {
        marca: 'mazda',
        modelo: '3',
        año: 2017,
        precio: 10000
    },
    {
        marca: 'renault',
        modelo: 'logan',
        año: 2012,
        precio: 4000
    },
    {
        marca: 'renault',
        modelo: 'sandero',
        año: 2015,
        precio: 5000
    },
    {
        marca: 'buggati',
        modelo: 'veyron',
        año: 2020,
        precio: 200000
    }
]

//console.log(carros[0].precio)
for (let carro of carros) {
    if (carros.indexOf(carro) < 2) {
        continue
    }
    //console.log(carro)
}

//for each
carros.forEach((carro, index) => {
    //console.log(carro.año)
})

//map
let carrosMap = carros.map((carro) => {
    return carro.marca
})

//console.log(carrosMap)

//find - retorna el primero que cumpla
let carroNuevo = carros.find((carro) => {
    return carro.año == 2021
})

//console.log(carroNuevo)

//filter - retorna los datos que complan
let carrosRenault = carros.filter((carro) => {
    return carro.marca === 'renault'
})

//console.log(carrosRenault)


//Some - hay algun dato asi?
let hayBuggati = carros.some((carro) => {
    return carro.marca === 'buggati'
})

//console.log(hayBuggati)

let menosDe100 = carros.every((carro) => {
    return carro.precio < 100000
})

//console.log(menosDe100)

//reduce -
let totalConcesionario = carros.reduce((valorInicial, carro) => {
    return valorInicial += carro.precio
}, 50000)

//console.log(totalConcesionario)


let numeros = [0, 1, 2, 3, 4, 5]
let existe2 = numeros.includes(2)
    //console.log(existe2)