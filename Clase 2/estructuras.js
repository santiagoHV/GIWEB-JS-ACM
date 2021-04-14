//if
var a = 0

if (a == 3) {
    console.log(a)
} else if (a == 2) {
    console.log(`entonces a es ${a}`)
} else {
    console.log('entonces ninguna')
}

if (a) {
    console.log(a)
}

// Falsy (False)

"" // un string vacío 
0 - 0
null
NaN
false
undefined

//Truthy (true)

    "hola"
30; { a: 1 }
[1, 3]
true

function a() {}
//más 
var a = 5

switch (a) {
    case 1:
        console.log(a)
        break
    case 2:
        console.log(a)
        break
    case 3:
        console.log(a)
        break
    case 4:
        console.log(a)
        break
    case 5:
        console.log(a)
        break
    default:
        console.log()
        break
}

// ciclos

for (var i = 0; i < 10; i++) {
    console.log(i)
}
var a = -5

while (a) {
    console.log(a)
    a++

    if (a == 2) {
        a = 0
    }
}
// .length longitud
var frutas = ['manzana', 'pera', 'mora']

for (var index = 0; index < array.length; index++) {
    console.log(frutas[i])
}

for (var i in frutas) {
    console.log(frutas[i])
}

for (var i of frutas) {
    console.log(i)
}