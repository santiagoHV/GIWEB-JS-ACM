//objetos literales

const pelicula = {
    nombre: 'señor de los anillos',
    id: 1,
    // reproducir(){
    //     return `reproduciendo pelicula ${this.nombre}`
    // }
    reproducir: () => {
        return `reproduciendo pelicula ${this.nombre}`
    }
}

console.log(pelicula)


//clases

class Pelicula{

    constructor(nombre, id){
        this.nombre = nombre
        this.id = id
    }

    reproducir(){
        return `reproduciendo pelicula ${this.nombre}`
    }
}

let peliculaUno = new Pelicula('harry', 1)

class Serie extends Pelicula{

    constructor(nombre, id, capitulos){
        super(nombre, id)
        this.capitulos = capitulos
    }

    reproducirCapitulo(){
        'reproduciendo capitulo'
    }
}