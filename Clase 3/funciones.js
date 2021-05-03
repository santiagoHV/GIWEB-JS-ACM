function saludo(nombreSaludo) {
    console.log(`${nombreSaludo} Bienvenido a el curso de GIWEB JS`)
}

function verificarIngreso(nombre, edad) {
    if (edad > 18) {
        console.log(`${nombre} es mayor de edad`)
        saludo(nombre)
    } else if (edad == 18) {
        console.log(`${nombre} ya puedes ir por tu cedula`)
        saludo(nombre)
    } else {
        console.log(`${nombre} es menor de edad`)
    }
}

verificarIngreso('nicolas', 18)
verificarIngreso('Briyid', 17)

//funciones con retorno

function suma(a, b) {
    return a + b
}

//funcion en variable

var sumaEnVar = function(a, b) {
    return a + b
}
console.log(sumaEnVar(5, 3))

//arrow functions

var sumaArrow = (a, b) => {
    return a + b
}
var sumaArrow2 = (a, b) => a + b

console.log(sumaArrow(5, 3))