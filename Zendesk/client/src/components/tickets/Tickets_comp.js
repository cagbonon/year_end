//import PostProfile from "../components/PostLibrary";
//import styles from "../styles/Home.module.css";
import axios from "axios";
import PostTicket from "../postTicket";
import React, { useEffect } from "react";
import { useState } from "react";

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
              {Posts.map((post, i) => (
                <PostTicket post={post} key={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


