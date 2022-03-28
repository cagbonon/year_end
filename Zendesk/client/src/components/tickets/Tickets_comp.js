//import PostProfile from "../components/PostLibrary";
//import styles from "../styles/Home.module.css";
import axios from "axios";
import PostTicket from "../postTicket";
import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

//import Header from "../components/Header";
//import Footer from "../components/Footer";

export const  Tickets = ()=> {


   
    const [Posts, setPost] = useState([])
    // console.log('jfhjljl');

    useEffect(() => {

      axios
      .get("http://localhost:8000/tickets")
      .then((response) => {
        setPost(response.data.tickets)
        // console.log(response.data.tickets);s
        
      })
      .catch((err) => {
        console.log(err);
      });

    }, []);

     
  
    // return {
    //   props: {
    //     posts: data,
    //   },
    // };
  
  //  console.log(data)
  return (
    <div className="d-flex flex-column min-vh-100">

      <main>
        <div className="card">
          {!Posts || Posts.length === 0 ? (
            <h2>Pas de ticket disponible</h2>
          ) : (
            <div
              className="d-flex w-100 justify-content-center"
              style={{ flexWrap: "wrap" }}
            >

                <table className="table table-bordered table-striped" style={{'font-size' : '20px'}}>
                  <thead className="" style={{'text-align' : 'center', 'background-color' : 'green', 'border' : 'none', 'color' : 'white' }}>
                    <tr style={{'border' : 'none'}}>
                    <th>Id</th>
                    <th>Sujet</th>
                    <th>Description</th>
                    {/* <th>Commentaires</th> */}
                    <th>Département</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th>Actions</th>

                    </tr>
                  </thead>
                  <tbody style={{'border-top' : 'none'}}>
                  {Posts.map((post, i) => (
                   <PostTicket post={post} key={i} />
                   ))}
                    {/* <tr>
                      <td>Id</td>
                      <td>Sujet</td>
                      <td>Description</td>
                      <td>Commentaires</td>
                      <td>Département</td>
                      <td>Statut</td>
                      <td>Date</td>
                      <td>Actions</td>                      
                    </tr> */}
                  </tbody>
                </table>


            </div>
          )}
        </div>
      </main>
    </div>
  );
}


