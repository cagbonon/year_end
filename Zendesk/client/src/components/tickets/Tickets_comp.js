import React, { useState } from "react";
import PropTypes from 'prop-types';
import { /*Row,*/ Table, Button, Alert } from "react-bootstrap";
import {generatePath, Link} from 'react-router-dom';
import "../../assets/styles/index.css";
import Modal from "../modal/Modal";


export const Tickets = ({tickets}) => {
    // if(!tickets.length)
    let newTickets = tickets
    const deleteTicket = (e, id) => {
        tickets.splice(id, 1)
        newTickets = tickets
        // window.location.reload(true);
        console.log(newTickets)
    }
    const [isOpen, setIsOpen] = useState(false);

    const state = {
        show: false
      };
     const showModal = e => {
        this.setState({
          show: true
        });
      };
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
                <td>
                    <Alert variant={stat === "résolu" ? "success" : "danger"}>{stat}</Alert>
                </td>
                <td>
                    {/* <div class="modal-vue">
                        <Button onClick={() => setIsOpen(true)} variant="danger">X</Button>
                        {isOpen && <div class="overlay" onClick={() => setIsOpen(false)} ></div>}
                        {isOpen && <Modal class="modal" setIsOpen={setIsOpen} />}
                    </div> */}
                    <Button onClick={() => deleteTicket(id-1)} variant="danger">X</Button>
                </td>
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