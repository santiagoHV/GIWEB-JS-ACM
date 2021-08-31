//promesas
const miPromesa = new Promise((resolve, recject) => {
    setTimeout((time) => {
        recject(new Error('error mio')) 
     }, 2000)
    
    setTimeout(() => {
        resolve({
            name: 'nicolas',
            lastname: 'Andrade'
        })
    }, 1000)

    
})

miPromesa.then((resolucion) => {
    console.log(resolucion)
}).catch((recject) => {
    console.log(recject)
})

console.log(miPromesa)