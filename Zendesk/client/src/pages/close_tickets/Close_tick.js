/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breamcumb/Breamcumb_comp'
import tickets from '../../assets/data/dummy_tickets.json'
import { Message_comp } from '../../components/text_his/Message_comp'
import { Update_tickets_comp } from '../../components/update_tickets/Update_tickets_comp'
import {useParams} from 'react-router-dom'

const ticket = tickets[0]
export const Close_tick = () => {
    const {id} = useParams()
    const [message, setMessage] = useState('')
    useEffect(() => {}, [message]);

    const change_value = e => {
        setMessage(e.target.value);
    }

    const manage_submit =()=>{
        alert('Form submited!')
    }
  return (
   <Container>
       <Row>
           <Col>
           <PageBreadcrumb page="Tickets" />
           </Col>
       </Row>

       <Row>
           <Col className="text-weight-bolder text-secondary">
               {/* {tid} */}
               {id}
                <div className="sujet">Sujet: {ticket.sujet}</div>
                <div className="date">Ticket opened: {ticket.status}</div>
                <div className="status">Status: {ticket.addedAt}</div>
           </Col>
           <Col className='text-right'> 
               <Button href="/dashboard" variant="secondary">Close ticket</Button> 
           </Col>
       </Row>
        <Row className="mt-4">
            <Col>
                <Message_comp msg={ticket.history}/>
            </Col>
        </Row>
        <hr />

        <Row className="mt-4">
            <Col>
                <Update_tickets_comp msg={message}
                change_value={change_value}
                manage_submit={manage_submit}
                />
            </Col>
        </Row>

   </Container>
  )
}
