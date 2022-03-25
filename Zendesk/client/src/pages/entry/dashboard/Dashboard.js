import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { Tickets } from "../../../components/tickets/Tickets_comp";
import tickets from '../../../assets/data/dummy_tickets.json';
import {PageBreadcrumb} from "../../../components/breamcumb/Breamcumb_comp"
// import profile from "../../../assets/img/profile.png"



export const Dashboard = () => {
    return (
        <Container>
            <Row class="d-flex justify-content-end">
                {/* <img src={profile} alt="Image - profile"/> */}
            </Row>
            <Row>
                <Col>
                <PageBreadcrumb page="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button href="/ticket"variant="secondary" bg="green" style={{"fontSize": "0.7rem", 
                    padding: "10px 10px"}}>
                        Add new Tickets</Button>
                </Col>
            </Row>

            <Row>
                <Col className="text-center mb-2">
                    <div>Total Tickets: {tickets.length}</div>
                    <div>Pending Tickets: {tickets.filter(ticket => ticket.stat === "Non résolu").length}</div>
                    <div>Resolve Tickets: {tickets.filter(ticket => ticket.stat === "résolu").length}</div>
                </Col>
            </Row>

            <Row>
                <Col className="mb-2">
                    Recently add tickects
                </Col>
            </Row>
            <hr />

            <Row>
                <Col className="recent-ticket">
                    <Tickets tickets={tickets}/>
                </Col>
            </Row>
        </Container>
    )
}