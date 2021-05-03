let miLista = ['dato1', 'dato2', 45, true]
    //console.log(miLista)

miLista.push('manzana')
miLista.pop()
miLista.unshift('pera')
miLista.shift()

for (let item of miLista) {
    //console.log(item)
}

let carros = [{
        marca: 'toyota',
        modelo: 'corolla',
        precio: 80000000,
        año: 2021
    },
    {
        marca: 'mazda',
        modelo: '3',
        precio: 30000000,
        año: 2017
    },
    {
        marca: 'renault',
        modelo: 'logan',
        precio: 12000000,
        año: 2012
    }
];

let carrosEach = carros.map((objeto, index) => {
    return objeto
})

//console.log(carrosEach)

let carrosSome = carros.some((carro) => {
    return carro.año > 2022
});

//console.log(carrosSome)

let carrosFilter = carros.filter((carro) => {
        return carro.precio < 50000000
    })
    //console.log(carrosFilter)

let carrosFind = carros.find((carro) => {
        return carro.marca === 'toyota'
    })
    //console.log(carrosFind)

let carrosReduce = carros.reduce((valorActual, carro) => {
        return valorActual += carro.precio
    }, 2)
    //console.log(carrosReduce)

console.log(carros.length)