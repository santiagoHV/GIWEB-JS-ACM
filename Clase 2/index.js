//TIPOS DE DATOS

//Primitivos 

//number
var a = 1
var b = 2.1

//console.log(typeof(b))

var suma = a + b
console.log(suma)

var resta = a - b
console.log(resta)

var multiplicacion = a * b
console.log(multiplicacion)

var division = a / b
console.log(division)

var t = 5
t++

t = t + 1
t += 1

var a = 10
var b = 3
var c = a / b
console.log(c.toFixed(3))

//boolean

var booleano = true
var booleanoFalso = false

console.log(typeof(booleano))

//string
var comillaSimple = 'mi apodo es santiago'
var comillaDoble = "hola, como estas?"

var jerarquia = " mi nombre es 'santiago' "

//alt + 96 ASCII
var comillaInvertida = `"prueba 'sad' "`

var hola = 'hola '
var pregunta = 'como estas?'
var a = 1

console.log('la variable a es igual a ' + a)
console.log(`la variable a es igual a ${a}`)

//operaciones entre datos diferentes

console.log('2' * 4)

//comparaciones
var a = 1
console.log(a != 2)

console.log('1' == 1)
console.log('1' === 1) //comparacion estricta


//No primitivos
var frutas = ['manzana', 'pera', 'mora', 5, true]
console.log(typeof(frutas))

var clase = {
    "daniel": 5,
    'cesar': 'apellido'
}
console.log(typeof(clase))