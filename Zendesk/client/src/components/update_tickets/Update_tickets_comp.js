import React from "react";
import PropTypes from 'prop-types'
import { Form, Button } from "react-bootstrap";

export const Update_tickets_comp = ({msg, change_value, manage_submit}) => {
  return (
    <Form onSubmit={manage_submit}>
        <Form.Label></Form.Label>
        <Form.Text>Please reply your text</Form.Text>
        <Form.Control
        value={msg}
        onChange={change_value}
        as="textarea" rows="5"
        name="detail" />
        <div className="text-right mt-3 mb-3">
            <Button variant="success" type="Submit">Reply</Button>
        </div>
    </Form>
 )
};

Update_tickets_comp.propTypes = {
    change_value: PropTypes.func.isRequired,
    manage_submit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
} 
