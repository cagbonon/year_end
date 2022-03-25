import React, {useEffect, useState} from 'react';
import {PageItem, Form, Button, Row, Col} from 'react-bootstrap';
import Previews from './File_comp';
import './tickets_form.css';
// import Proptypes from 'prop-types'


export const Tickets_form = (manage_submit, change_value, frmDataErro, frmDt) => {
    console.log(frmDt);
    return (
        <PageItem className="mt-3 add-new-ticket
            bg-light">
                <h4 className="text-secondary text-center">Add a new ticket</h4>
                <hr />
                <Form.Select size='sm' aria-label="Default select example">
                    <option>Départements</option>
                     <option value="1">Bocal</option>
                    <option value="2">Finance Department</option>
                    <option value="3">Administrative Department</option>
                    <option value="3">Pedagogy Department</option>
                    <option value="3">Directors Department</option>
                    <option value="3">Carrer Center Department</option>
                    <option value="3">Communication Department</option>
                    <option value="3">Other</option>
                </Form.Select>  
             <Form autoComplete="off" onSubmit={manage_submit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>À</Form.Label>
                        <Col sm={20}>
                            <Form.Control 
                            type="sujet"
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
                            CC
                        </Form.Label>
                        <Col sm={20}>
                            <Form.Control 
                            type="cc"
                            name="issueDate"
                            // value={frmDt.issueDate}
                            required
                             />
                       </Col> 
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Sujet*</Form.Label>
                        <Form.Control 
                        as="textarea"
                        name="detail"
                        // value={frmDt.detail}
                        rows="3"
                        required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description*</Form.Label>
                        <Form.Control 
                        as="textarea"
                        name="detail"
                        // value={frmDt.detail}
                        rows="5"
                        required
                        />
                    </Form.Group>
                    <Previews />
                    <Button type="submit" variant='secondary'>Envoyer</Button>
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