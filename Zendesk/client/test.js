import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { AuthConsumer } from "../../components/Authorization";
import Navbar from "../../components/Navbar";
import Line from "../../components/Line"
//import CommentForm from "../../components/CommentForm"
import { useState } from "react";
import { Link } from "@reach/router";
// import "./styles.scss";

export default class Tiks extends React.Component {
  state = {
    content: "",
    displayableId: "azoo",
    username: [],
    persons: [],
    isOpen: false,
    isO: false,
    ticketId: "",
    senderId: "",
    receverId: "",
    Id: "",
    ticketId2: "",
  };

  handleClose = () => this.setState({ isO: false });
  handleShow = () => this.setState({ isO: true });
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handleChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };

  handleChangeId = (event) => {
    this.setState({ ticketId: event.target.value });
  };

  handleChangeIdTicket = (event) => {
    this.setState({ ticketId2: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.displayableId,
    };

    axios
      .post(`http://localhost:8080/api/ticket/getAllUserTicket`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //console.log(((res.data["body"])["user"])["ticketId"]);
        const persons = res.data.body;
        this.setState({ persons });
        //console.log(persons[0]);
        //console.log(persons[1]);
        //console.log(this.persons[1]);
      });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    //this.state.persons.map

    const comment = {
      ticketId: this.state.ticketId,
      content: this.state.content,
      senderId: this.state.displayableId,
      receverId: "dfghnj",
    };

    axios
      .post(`http://localhost:8080/api/ticket/addComment`, comment)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //console.log(((res.data["body"])["user"])["ticketId"]);
        //const persons = res.data.body;
        //this.setState({ persons });
      });
    console.log("bbbb");
  };

  updateState = (user) => {
    if (
      user &&
      this.state.name !== user.name &&
      this.state.username !== user.displayableId
    )
      this.setState({ name: user.name, displayableId: user.displayableId });
  };

  render() {
    return (
      <AuthConsumer>
        {({ user }) => {
          return (
            <div className="container mt-5">
              <Navbar />
              <h1>Tout mes tickets créer</h1>
              <div className="row">
                <div className="col">
                  <button
                    onChange={this.updateState(user)}
                    onClick={this.handleSubmit}
                  >
                    Voir tout mes tickets
                  </button>
                </div>
              </div>
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Date</th>
                      <th>Créateur du ticket</th>
                      <th>Départements</th>
                      <th>Destinataire</th>
                      <th>Contenu du tiket</th>
                      <th>Commentaire</th>
                      <th>Rédiger un commentaire</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.persons.map((person) => (
                      <tr>
                        <td>{person._id}</td>
                        <td>{person.createdAt}</td>
                        <td>{person.usernameOfCreator}</td>
                        <td>{person.typeOfRecever}</td>
                        <td>{person.cc}</td>
                        <td> 
                          {person.content} 
                       </td>
                        <td>
                       <Link to={`/commentpage/${person._id}`}>
                          <button>détail</button>
                       </Link>
                        </td>
                        <td>
                          <Button variant="primary" onClick={this.handleShow}>
                            Faire un commentaire
                          </Button>
                          <Modal
                            show={this.state.isO}
                            onHide={this.handleClose}
value={person._id}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Ajouter un commentaire </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form onSubmit={this.handleSubmitForm}>
                                <Form.Group
                                  name="content"
                                  onChange={this.handleChangeId}

                                >
                                  <Form.Label>ID du ticket : </Form.Label>
                                  <Form.Control
                                    type="text"
                                    //placeholder
value={person._id}
                                  />
                                </Form.Group>
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                  name="content"
                                  onChange={this.handleChangeContent}
                                >
                                  <Form.Label>
                                    Description : {person.content}{" "}
                                  </Form.Label>
                                  <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                  Envoyer
                                </Button>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={this.handleClose}
                              >
                                Fermer
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                        <td>{person.isTerminate}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}