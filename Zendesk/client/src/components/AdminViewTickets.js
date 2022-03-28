//import PostProfile from "../components/PostLibrary";
//import styles from "../styles/Home.module.css";
import axios from "axios";
import PostTicket from "../components/postTicket";

//import Header from "../components/Header";
//import Footer from "../components/Footer";

export default function dashAdmin({ posts }) {
  return (
    <div className="d-flex flex-column min-vh-100">

      <main>
        <div className="card">
          {!posts || posts.length === 0 ? (
            <h2>Pas de ticket disponible</h2>
          ) : (
            <div
              className="d-flex w-100 justify-content-center"
              style={{ flexWrap: "wrap" }}
            >
              {posts.map((post, i) => (
                <PostTicket post={post} key={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  let data = [];
  await axios
    .get("http://localhost/8000/tickets")
    .then((response) => {
      console.log(response.data.data);
      data = response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      posts: data,
    },
  };
}