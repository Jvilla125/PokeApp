import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Signup.css'
import { Link } from "react-router-dom";

import ReturnHome from "../../../components/Returnhome/Returnhome";

export default function Signup() {
    const [validated, setValidated] = useState(false);

    // create a function to check if both passwords match
    const onChange = () => {
        const password = document.querySelector('input[name=password]')
        const confirm = document.querySelector('input[name=confirmPassword]')
        if(confirm.value === password.value){
            confirm.setCustomValidity("")
        } else{
            confirm.setCustomValidity("Passwords do not match")
        }
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <Container fluid>
        <ReturnHome />
        <Row className="mt-5 justify-content-md-center">
            <Col md={5}>
                <h1 className="login">Welcome to PokeApp!</h1>
                <Form className="p-4 mt-3 login text-center" noValidate validated={validated} onSubmit={handleSubmit}>
                    <h2><u>Sign up!</u></h2>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            name="username"
                            type="text"
                            placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name="password"
                            type="password"
                            placeholder="Password" 
                            minLength={6}
                            onChange={onChange}
                            />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="formBasicPasswordRepeat">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Repeat Password"
                                name="confirmPassword"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid"> Both passwords should match</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="email"
                                placeholder="Enter email" />
                        </Form.Group>
                    <Button className="text-center" variant="primary" type="submit">
                        Sign up
                    </Button>
                    <Row >
                        <p>If you have an account, please <Link to="/login">login</Link></p>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}