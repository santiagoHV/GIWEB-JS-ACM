//CLOSURES

const miFuncion = function (){
    return 'hola soy una funcion'
}

// console.log(miFuncion)

// const moneyBox = (coins) => {
//     let savedCoins = 0

//     savedCoins += coins
//     console.log(`Money box $${savedCoins}`)
// }

// moneyBox(5)
// moneyBox(10)

const moneyBox = () => {
    let savedCoins = 0

    const countCoins = (coins) => {
        savedCoins += coins
        console.log(`Money box $${savedCoins}`)
        
    }

    return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(20)
myMoneyBox(3)

//SIMULAR ATRIBUTOS PRIVADOS

const person = () => {
    let name = 'name'
    return {
        getName: () => {
            return name
        },

        setName: (n) => {
            name = n
        }
    }
}

const juan = person()
console.log(juan.getName())

juan.setName('juan')
console.log(juan.getName())


////////////////
list = document.getElementById('lista')

list.innerHTML += `
<li>
    mucho texto 
    <button> </button
    <button> </button
</li>
`