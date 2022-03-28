import React, {useEffect, useState} from 'react';
import {PageItem, Form, Button, Row, Col} from 'react-bootstrap';
import Previews from './File_comp';
import './tickets_form.css';
// import Proptypes from 'prop-types'
import axios from 'axios'


export default function  AddTicket() {
    //console.log(frmDt);

    const [department, setDepartment] = useState("");
    const [cc, setCc] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    //const [url_image, setUrl_image] = useState("");

    const handleTicket = async (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/tickets/createTicket", {
                department,
                cc,
                subject,
                description,
                //url_image,
            })
            .then((response) => {
                console.log(response.data);
                return response.data;
                window.location = "/dashboard";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (

        <div className="d-flex flex-column min-vh-100 mt-3 add-new-ticket
        bg-light">


        <div className="container my-5 ">
        <form
        onSubmit={handleTicket}
        style={{ width: "90%", maxWidth: "600px", margin: "3rem auto" }}
        
        >

        <h4>Add new ticket</h4>

        
        <div className="mb-3">
                <select 
                onChange={(e) => setDepartment(e.target.value)}
                value = {department}
                >

                <option>Départements</option>
                    <option value="Bocal">Bocal</option>
                    <option value="Finance">Finance Department</option>
                    <option value="Administrative">Administrative Department</option>
                    <option value="Pedagogy">Pedagogy Department</option>
                    <option value="Directors">Directors Department</option>
                    <option value="Carrer_Center">Carrer Center Department</option>
                    <option value="Communication">Communication Department</option>
                    <option value="Other">Other</option>
                </select>  
        </div>


        <div className="mb-3">
            <label htmlFor="firstnameInput1" className="form-label">
            Cc
            </label>
            <input
            type="email"
            name="cc"
            value={cc}
            onChange = {(e) => setCc(e.target.value)}
            required
            
            />
        </div>


        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Sujet
            </label>
            <input
            type="text"
            className="form-control "
            id=""
            name="subject"
            value={subject}
            onChange = {(e) => setSubject(e.target.value)}
            rows="3"
            required
            
            />

            
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
            Description
            </label>
            <input
            type="text"
            className="form-control"
            id=""
            name="description"
            value={description}
            onChange = {(e) => setDescription(e.target.value)}
            rows="5"
            required
            
            />
        
        </div>
        
        <Previews />

        <button type="submit" className="btn btn-primary">
            Add Ticket
        </button>
        </form>
        </div>
        </div>
        
    )
}


// <PageItem 
//         className="mt-3 add-new-ticket
//             bg-light">

//                 <form onSubmit={handleTicket}>

//                 <h4 className="text-secondary text-center">Addd a new ticket</h4>
//                 <hr />
//                 <Form.Select size='sm' aria-label="Default select example"
//                 onChange={(e) => setDepartment(e.target.value)}
//                 value = {department}
//                 >
//                     <option>Départements</option>
//                      <option value="1">Bocal</option>
//                     <option value="2">Finance Department</option>
//                     <option value="3">Administrative Department</option>
//                     <option value="3">Pedagogy Department</option>
//                     <option value="3">Directors Department</option>
//                     <option value="3">Carrer Center Department</option>
//                     <option value="3">Communication Department</option>
//                     <option value="3">Other</option>
//                 </Form.Select>  
//              <Form autoComplete="off">
//                     {/* <Form.Group as={Row}>
//                         <Form.Label column sm={3}>À</Form.Label>
//                         <Col sm={20}>
//                             <Form.Control 
//                             type="sujet"
//                             // value={frmDt.sujet}
//                             // onChange={change_value}
//                             maxLength="100"
//                             placeholder="Email"
//                             required
//                             />
//                             {/* <Form.Text className='text-danger'>
//                                 {!frmDataErro.sujet && "Un sujet est requis"}
//                             </Form.Text> */}
//                         {/* </Col> */}
//                     {/* </Form.Group> */} 

//                     <Form.Group as={Row}>
//                         <Form.Label column sm={3}>
//                             CC
//                         </Form.Label>
//                         <Col sm={20}>
//                             <Form.Control 
//                             type="email"
//                             name="cc"
//                             value={cc}
//                             onChange = {(e) => setCc(e.target.value)}
//                             required
//                              />
//                        </Col> 
//                     </Form.Group>
                    
//                     <Form.Group>
//                         <Form.Label>Sujet*</Form.Label>
//                         <Form.Control 
//                         as="textarea"
//                         name="subject"
//                         value={subject}
//                         onChange = {(e) => setSubject(e.target.value)}
//                         rows="3"
//                         required
//                         />
//                     </Form.Group>

//                     <Form.Group>
//                         <Form.Label>Description*</Form.Label>
//                         <Form.Control 
//                         as="textarea"
//                         name="description"
//                         value={description}
//                         onChange = {(e) => setDescription(e.target.value)}
//                         rows="5"
//                         required
//                         />
//                     </Form.Group>
//                     <Previews />
//                     <Button type="submit" className="btn btn-primary">Envoyer</Button>
//                 </Form>
                    
//                 </form>

//         </PageItem>









// Tickets_form.propTypes = {
// //     manage_submit: Proptypes.func.isRequired,
// //     change_value: Proptypes.func.isRequired,
// //     frmDt: Proptypes.object.isRequired,
//         frmDataErro: Proptypes.object.isRequired,


// }