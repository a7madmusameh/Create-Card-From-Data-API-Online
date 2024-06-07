import React, { useEffect, useState } from "react";
import apiCLient from "../API/apiCLient";
import "./Card.css";

function Card() {
  debugger;
  const [resultPosts, setResultPosts] = useState([]);
  const [resultUsers, setResultUsers] = useState();

  useEffect(() => {
    cLientPosts();
    cLientUsers();
  }, []);

  const cLientPosts = async () => {
    try {
      const dataPosts = await apiCLient.posts.getPosts();
      setResultPosts(dataPosts);
    } catch (error) {
      alert("not fund data in posts");
    }
  };

  const cLientUsers = async () => {
    try {
      const dataUsers = await apiCLient.users.getUsers();
      const data = dataUsers.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});
      setResultUsers(data);
    } catch (error) {
      alert("not fund data in users");
    }
  };

  if (resultUsers) {
    return resultPosts.map((item) => {
      return (
        <div className="card col" key={item.id}>
          <div className="user-name">
            <img className="img-user" src="./user.webp" />
            {resultUsers[item.userId]["name"]}
          </div>
          <div className="title">
            <h3>{item.title}</h3>
          </div>
          <div className="body">
            <p>{item.body}</p>
          </div>
          <div className="img-action-display">
            <img className="img" src="./like.jpg" />
            <img className="img" src="./comment.png" />
          </div>
        </div>
      );
    });
  }
}

export default Card;
