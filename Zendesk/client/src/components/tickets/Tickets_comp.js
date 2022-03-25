import React from "react";
import PropTypes from 'prop-types';
import { /*Row,*/ Table, Button } from "react-bootstrap";
import {generatePath, Link} from 'react-router-dom';
import "../../assets/styles/index.css";


export const Tickets = ({tickets}) => {
    // if(!tickets.length)
    let newTickets = tickets
    const deleteTicket = (e, id) => {
        tickets.splice(id, 1)
        newTickets = tickets
        // window.location.reload(true);
        console.log(newTickets)
    }
    return <Table id="customers" striped bordered hover>
        <thead>

            <tr>
                <th>#</th>
                <th>Sujet</th>
                <th>ID</th>
                <th>Caution</th>
                <th>Dernière activité</th>
                <th>Statut</th>
                <th>Effacer</th>
            </tr>
        </thead>
        <tbody>
            {newTickets.length ? 
            newTickets.map(({id, sujet, status,addedAt, act,stat}) => (
            <tr onChange={newTickets} key={id}>
                <td>{id}</td>
                <Link to={generatePath(`/:id`,{id}) }>
                <td>{sujet}</td>
                </Link>
                <td>{status}</td>
                <td>{addedAt}</td>
                <td>{act}</td>
                <td>{stat}</td>
                <td><Button onClick={() => deleteTicket(id-1)} variant="danger">X</Button></td>
            </tr>)) :

            <tr>
                <td colSpan="4" className="text-center">No ticket show</td>
            </tr>
            }
        </tbody>
    </Table>;
};

Tickets.propTypes = {
    tickets: PropTypes.array.isRequired,
}