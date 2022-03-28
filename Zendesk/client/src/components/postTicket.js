import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Table } from "react-bootstrap";

export default function PostTicket({ post }) {


  // const [user, setUser] = useState("");
  //   useEffect(() => {
  //     if (!user) {
  //       const users = JSON.parse(localStorage.getItem("data"));
  //       //console.log(users)
  //       setUser(users);
  //     }
  //   }, [user]);


  const handleDelete = ()=> {
      //e.preventDefault();

    axios
      .delete(`http://localhost:8000/tickets/${post._id}`)
      .then((response) => {
        //console.log(response.data);
        //response.data;
        //localStorage.setItem("data", JSON.stringify(response.data));

        window.location = "/tickets";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      
      <tr>
        <td style={{'color' : 'black', 'padding' : '15px'}}>{post._id}</td>
        <td style={{'color' : '#7a7a7a', 'padding' : '15px'}}>{post.subject}</td>
        <td style={{'color' : '#7a7a7a', 'padding' : '15px'}}>{post.description}</td>
        {/* <td>{post.commentaire}</td> */}
        <td style={{'color' : '#7a7a7a', 'padding' : '15px'}}>{post.department}</td>

        

        <td style={{'color' : '#7a7a7a', 'padding' : '15px'}}>{post.status}</td>
        
        <td style={{'color' : '#7a7a7a', 'padding' : '15px'}}>{post.updated_date.split('T')[0]} at {post.updated_date.split('T')[1].split('.')[0]} </td>
        <td>
          <button type="button" className="btn btn-primary">DETAIL</button>  &nbsp;
          <button type="button" className="btn btn-warning">DETAIL</button>   &nbsp;
          <button type="button" className="btn btn-danger">DETA</button>  
        </td>                
      </tr>










      {/* <div
        className="card m-4 p-0 w-25 unCard"
        style={{
          fontSize: "1.1rem",
          borderRadius: "20px",
          boxShadow: "10px 8px 7px rgba(0,0,0,0.05)",
          borderWidth: 0,
        }}
      >
        <div className="card-body p-0">
          <div
            className="text-white p-2 mb-4 d-flex justify-content-center"
            style={{ backgroundColor: "teal", flexWrap: "wrap" }}
          >
            <h6
              className="card-title mx-3"
              style={{ fontSize: "1.1rem" }}
            >
              Ticket
            </h6>
          </div>


          <div className="p-2">
            <p className="card-text"> Subject : {post.subject}</p>
          </div>

          <div className="p-2">
            <p className="card-text"> Description : {post.description}</p>
          </div>


          <div className="p-2 d-flex justify-content-center mt-4">

            
                    
                    {/* <a href={`/update-profile/${post._id}`} className="mx-3">
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ fontSize: 20, color: "green" }} />
              </a> */}
              {/* <FontAwesomeIcon
                  icon={faTrash}
                  style={{ fontSize: 20, color: "red" }}
                  className="mx-3"
                  onClick={() => handleDelete(post._id)} />
                   */}
                  
                  
{/*
          </div>
        </div>
      </div> */}
    </>
  );
}
