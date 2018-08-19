import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col sm="4">
                            <h4>Contato</h4>
                            
                        </Col>
                        <Col sm="4">
                            <h4>Inspiração</h4>
                        </Col>
                        <Col sm="4">
                            <h4>Parceiros</h4>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;