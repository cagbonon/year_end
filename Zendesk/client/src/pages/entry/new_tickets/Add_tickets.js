/* eslint-disable react/jsx-pascal-case */
// eslint-disable-next-line no-unused-vars
import e from 'express'
import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../../components/breamcumb/Breamcumb_comp'
import { Tickets_form } from '../../../components/tickets_form/Tickets_form_comp'
import {my_strlen} from '../../utils/save';


const initialFrmDt = {
    sujet: '',
    issueDAte: "",
    detail: "",
}

const initialFrmError = {
    sujet: false,
    issueDAte: false,
    detail: false,
}
export const Add_tickets = () => {
    // eslint-disable-next-line no-unused-vars
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

    useEffect(() => {}, [frmData], frmDataErro)

    // eslint-disable-next-line no-unused-vars
    const change_value = (e) => {
        const {name, value} = e.target;
    setFrmData ({
        ...frmData,
        [name]: value,
    });
        console.log(name, value);
    }

    const manage_submit = async (e) => {
        e.preventDefault();

        setFrmDataErro(initialFrmError)
        const isSujetValid = await my_strlen(frmData.sujet)

        !isSujetValid && setFrmDataErro({
            ...initialFrmError,
            sujet: isSujetValid,
        });
        console.log('Form submit request received', frmData)
    }
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                <Tickets_form 
                change_value={change_value}
                manage_submit={manage_submit}
                frmDt={frmData}
                frmDataErro={frmDataErro}
                />
                </Col>
            </Row>
        </Container>
    )
}
