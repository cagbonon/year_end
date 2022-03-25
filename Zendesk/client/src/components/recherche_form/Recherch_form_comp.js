import React from 'react'
import PropTypes from 'prop-types'
import {Form, Row, Col} from 'react-bootstrap'

export const Recherch_form_comp = ({change_value, str}) => {
  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column ms="2"></Form.Label>
                <Col ms="9">
                    <Form.Control
                    name='searchStr'
                    onChange={change_value}
                    value={str}
                    placeholder="" />
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}

Recherch_form_comp.propTypes = {
    change_value: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}