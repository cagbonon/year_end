import React from "react";

import Protypes from 'prop-types'
import { Container, Row, Col, Form, /*FormGroup,*/ Button } from "react-bootstrap";


export const Password_change = ({change_value, manage_reset_submit, form_twitch, email, password}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Login Admin</h1>
                <hr/>
                <Form gap={3} autoComplete="off" onSubmit={manage_reset_submit}>
                    <Form.Group style={{"display": "flex", "align-items": "left", "margin": "1rem"}}>
                        <Form.Label style={{"margin-right": "0.7rem"}}>Email:</Form.Label>
                        <Form.Control 
                        type="text"
                        name="email"
                        value={email}
                        onChange={change_value}
                        placeholder="Enter your email"
                        required
                        />
                    </Form.Group>
                    <Form.Group style={{"display": "flex", "align-items": "left", "margin": "1rem"}}>
                        <Form.Label style={{"margin-right": "0.7rem"}}>Password:</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={password}
                        onChange={change_value}
                        placeholder="Enter your password"
                        required
                        />
                    </Form.Group>
                    <Button style={{"margin": "0.7rem"}} type="submit">Login</Button>
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={() => form_twitch('login')}>Login now</a>
                </Col>
            </Row>
        </Container>
    )
}

Password_change.prototypes = {
    change_value: Protypes.func.isRequired,
    manage_reset_submit: Protypes.func.isRequired,
    form_twitch: Protypes.func.isRequired,
    email: Protypes.string.isRequired,
};