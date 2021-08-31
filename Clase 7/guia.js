// const promesa = new Promise((resolve, recject) => {
//     setTimeout(() => {
//         resolve("datos bien")
//     }, 4000)

//     setTimeout(() => {
//         recject("error")
//     }, 3000)
// })

// promesa.then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// })


const fetchData = async () => {
    response = await fetch('https://rickandmortyapi.com/api/character/')
    data = await response.json()

    console.log(data)
}

// fetchData()

fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => console.log(data) 
).catch((error) => {
    console.log()
})