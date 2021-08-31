//objeto literal
let miEdad = 50
let miNombre = 'santiago'
// let santiago = [50, 'herrera', 'UD']

const santiago = {
    nombre: 'Santiago',
    edad: 50,
    universidad: 'UD',
    materiasU: ['calculo','programacion'],
    colaborador: {
        nombre: 'david',
        edad: 40
    },
    saludar: () => {
        console.log('hola!!')
        return 'ya se saludo'
    }
}
const estado = santiago.saludar()

// console.log(estado)

//JSON (Javascript object notation)

const harryPotter = {
    nombre: 'harry potter',
    duracion: 120,
    personajes: ['harry', 'ron']
}

const titanic = {
    nombre: 'titanic',
    duracion: 121,
    personajes: ['dicaprio']
}

class Pelicula{
    constructor(nombre, duracion, personajes){
        this.nombre = nombre,
        this.duracion = duracion,
        this.personajes = personajes
    }

    reproducir(){
        console.log(`se esta reproduciendo ${this.nombre}`)
    }
}

const titanic2 = new Pelicula('titanic', 121, ['dicaprio'] )
const harryPotter2 = new Pelicula('harry potter',120,['harry', 'ron'])

// console.log(harryPotter2)
console.log(titanic2)
// titanic2.reproducir()

//herencia

class Serie extends Pelicula{
    constructor(nombre, duracion, personajes, capitulos){
        super(nombre, duracion, personajes)
        this.capitulos = capitulos
    }
}

const breackingBad = new Serie('bb', 20, [''], ['cap 1', 'cap 2'])
// console.log(breackingBad)
breackingBad.reproducir()
