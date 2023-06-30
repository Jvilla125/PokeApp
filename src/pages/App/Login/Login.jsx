import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ReturnHome from "../../../components/Returnhome/Returnhome";
import { Link } from "react-router-dom";
import '../../../index.css'

export default function Login() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid>
            <ReturnHome />
            <Row className="mt-5 justify-content-md-center">
                <Col md={4}>
                    <h1 className="login">Welcome to PokeApp!</h1>
                    <Form className="p-4 mt-3 login text-center" noValidate validated={validated} onSubmit={handleSubmit}>
                        <h2><u>Log in</u></h2>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="email"
                                placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder="Password" />
                        </Form.Group>
                        <Button className="text-center" variant="primary" type="submit">
                            Log in
                        </Button>
                        <Row >
                            <p>If you do not have an account, please <Link to="/signup">Sign up</Link></p>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}