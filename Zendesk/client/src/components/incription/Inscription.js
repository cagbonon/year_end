import React, {useEffect, useState} from 'react';
import {PageItem, Form, Button, Row, Col} from 'react-bootstrap';
import '../tickets_form/tickets_form.css';
// import Proptypes from 'prop-types'


export const Inscription = (manage_submit, change_value, frmDataErro, frmDt) => {
    console.log(frmDt);
    return (
        <PageItem className="mt-3 add-new-ticket bg-light">
                <h4 className="text-secondary text-center">Inscription</h4>
                <hr />
                <Form.Label column sm={3}>
                    Département
                </Form.Label>
                <Form.Select name="Départements" size='sm' aria-label="Default select example">
                    <option value="Bocal">Bocal</option>
                    <option value="Finance Department">Finance Department</option>
                    <option value="Administrative Department">Administrative Department</option>
                    <option value="Pedagogy Department">Pedagogy Department</option>
                    <option value="Directors Department">Directors Department</option>
                    <option value="Carrer Center Department">Carrer Center Department</option>
                    <option value="Communication Department">Communication Department</option>
                    <option value="Other">Other</option>
                </Form.Select>  
             <Form autoComplete="off" onSubmit={manage_submit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={20}>
                            <Form.Control 
                                type="email"
                                // value={frmDt.sujet}
                                // onChange={change_value}
                                maxLength="100"
                                placeholder="Email"
                                required
                            />
                            {/* <Form.Text className='text-danger'>
                                {!frmDataErro.sujet && "Un sujet est requis"}
                            </Form.Text> */}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Statut
                        </Form.Label>
                        <Form.Select 
                         style={{"margin-left": "1rem", "width": "95%"}}
                         name="Départements" 
                        >
                            <option value="Membre">Membre</option>
                            <option value="Admin">Administrateur</option>
                        </Form.Select>
                    </Form.Group>
                    <Button
                     style={{"margin": "2rem 0 1rem 0"}}
                     type="submit" 
                     variant='secondary'
                    >
                        Envoyer
                    </Button>
                </Form>
        </PageItem>
    )
}

// Tickets_form.propTypes = {
// //     manage_submit: Proptypes.func.isRequired,
// //     change_value: Proptypes.func.isRequired,
// //     frmDt: Proptypes.object.isRequired,
//         frmDataErro: Proptypes.object.isRequired,


// }