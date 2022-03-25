import React from "react";

import Protypes from 'prop-types'
import { Container, Row, Col, Form, /*FormGroup, */Button, /*Anchor */} from "react-bootstrap";

export const LoginForms = ({change_value, manage_submit, form_twitch, email, is_pass}) => {
    return (
        <Container>
            <Row style={{ 
        "color" :"white"}}>
                <Col >
                <h3  style={{ 
        "color" :"white"}} className="text-info text-center">Client authentification</h3>
                <hr/>
                <Form autoComplete="off" onSubmit={manage_submit}>
                <Button href="/tickets"variant="info"  style={{"fontSize": "0.7rem", 
                    padding: "10px 10px","color" :"white"}}>
                        Login with Microsoft</Button>
                    {/* <Form.Group>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange={change_value}
                        placeholder="Enter your email"
                        required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        onChange={change_value}
                        value={is_pass}
                        placeholder="password"
                        required
                        />
                    </Form.Group>  */}

                    {/* <Anchor type="submit">Login</Anchor> */}
                </Form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" style={{
                    "color" :"white"}} onClick={() => form_twitch('rest')}>Admin Login</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForms.prototypes = {
    change_value: Protypes.func.isRequired,
    manage_submit: Protypes.func.isRequired,
    form_twitch: Protypes.func.isRequired,
    email: Protypes.string.isRequired,
    is_pass: Protypes.string.isRequired,
};