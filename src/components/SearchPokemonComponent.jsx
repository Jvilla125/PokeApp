import React from "react";
import { Row, Col, Button, Form, Container} from 'react-bootstrap'

export default function SearchPokemonComponent() {
    return (
        <Container fluid>
            <Row className="justify-content-md-center text-center mt-5">
                <Col xs lg="2">
                    <Button variant="primary">Randomize List</Button>
                </Col>

                <Col xs lg="2"><h2>OR</h2></Col>
                <Col xs lg="2">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="primary">Search</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}