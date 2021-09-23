import React, {Component} from "react";
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import Carta from "./carta";
import './styles/home.css'

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            superHeroes: [
                {
                    nombre: 'Capitan America',
                    img: 'https://media.vandalsports.com/i/1706x960/4-2021/2021427125442_1.jpg.webp',
                    identidad: 'Steve Rogers',
                    grupo: 'vengadores'
                },
                {
                    nombre: 'Superman',
                    img: 'https://sm.ign.com/t/ign_es/screenshot/default/publicity-photo-superman-the-movie-20409106-1054-1_8zn8.1280.jpg',
                    identidad: 'Clark Kend',
                    grupo: 'Liga de la justicia',
                },
                {
                    nombre: 'Iron Man',
                    img: 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/02/Iron-Man-PS5.jpg?fit=2500%2C1500&ssl=1',
                    identidad: 'Tony Stark',
                    grupo: 'Vengadores'
                },
                {
                    nombre: ' iron man',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4ByXNWknFXoSG358Var0FwXGshP_9lJGxg&usqp=CAU',
                    identidad: 'Tony Stark',
                    grupo: 'Vengadores'
                },
                {
                    nombre: 'Wolverine',
                    img: 'https://www.quever.news/u/fotografias/m/2021/2/11/f608x342-6627_36350_7.jpg',
                    identidad: 'Logan',
                    grupo: 'X-Men'
                },
                {
                    nombre: "Scott Summers",
                    identidad: "Cyclops",
                    imagen: "https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2FCyclops.png",
                    grupo: "xmen"
                  },
                  {
                    nombre: 'Spider-man',
                    img:'https://www.universalorlando.com/webdata/k2/es/us/files/Images/ioa-amazing-adventures-of-spiderman-ride-animation-cf-b.jpg',
                    identidad: 'Peter Parker',
                    grupo: 'Vengadores'
                  }
            ],

            estadoPagina: 2
        }

        this.cambiarNumero = this.cambiarNumero.bind(this)
        setTimeout(this.cambiarNumero, 2000)
    }

    cambiarNumero(){
        this.setState({
            ...this.state,
            estadoPagina: 55
        })
    }

    renderSuperHeroes = () => {
        return(
            <Row>
                <Carta heroes={this.state.superHeroes} />
            </Row>
        )
    }

    //Constructor
    render(){
        return(
            <Container >
                <h1>{this.state.estadoPagina}</h1>
                {this.renderSuperHeroes()}
            </Container>
        )
    }
}

export default Home

//Esto hice yo para el Home v: