/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breamcumb/Breamcumb_comp'
import { Recherch_form_comp } from '../../components/recherche_form/Recherch_form_comp'
import {Tickets} from "../../components/tickets/Tickets_comp"
import tickets from '../../assets/data/dummy_tickets.json'

export const Ticket_lists = () => {

    const [str, setStr] = useState('');
    const [dispTicket, setDispTicket] = useState(tickets);


    useEffect (() => {}, [str, dispTicket]);

    const change_value = e => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
    }

    const searchTicket = dest => {
        const display_tickets = tickets.filter(row=> row.sujet.toLowerCase().includes(dest.toLowerCase()))
        setDispTicket(display_tickets)

    }
  return (
      


    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket lists" />
            </Col>
        </Row>

        <Row className='mt-4'>
            <Col>
                <Button href="/ticket" variant='warning'>New ticket</Button>
            </Col>

            <Col className='text-right'></Col>
                <Recherch_form_comp change_value={change_value} str={str} />
        </Row>
        <hr />

        <Row>
            <Col>
                <Tickets tickets={dispTicket}/>
            </Col>
        </Row>

    </Container>
  )
}
