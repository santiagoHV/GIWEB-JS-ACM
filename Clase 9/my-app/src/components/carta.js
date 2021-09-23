import React, {Component} from "react";
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

class Carta extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row>
                {
                    this.props.heroes.map((heroe) =>{
                        return(
                            <Col sm={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={heroe.img} />
                                <Card.Body>
                                    <Card.Title>{heroe.nombre}</Card.Title>
                                    <Card.Text>
                                    {heroe.identidad}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                                </Card>
                            </Col>
                            
                        )
                    })
                }
            </Row>
        )
    }
}

export default Carta