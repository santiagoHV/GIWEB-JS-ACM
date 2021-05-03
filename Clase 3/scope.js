var a;
let b;
const c;

var a = 5
var a = 4

let a = 3
let a = 5 //error

const d = 5
d = 6

const suma = () => 'sumas'

const funcionCualquiera = () => {

    if (true) {
        var i = 5 //alcance de bloque
        let j = 6 //alcance local
        const k = 8
        h = 5 //alcance global
    }
    // console.log(i)
    // console.log(j)
    // console.log(k)
}
funcionCualquiera()
console.log(h)


const santiago = {
    'nombre': 'santiago',
    'carrera': 'sistemas'
}