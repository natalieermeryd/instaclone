import React, { useState, useEffect } from "react";
import "./App.css";

import Post from "./Post";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);
  // useEffect => Runs a piece of code based on a specific condition
  // example: run code when page refreshes

  useEffect(
    () => {
      const fetchPosts = async () => {
        //this is where the code runs, only once it runs
        const querySnapshot = await getDocs(collection(db, "posts"));
        //onSnapshot => every single time a new post is added, this code fires off
        setPosts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      };

      fetchPosts();
    },
    [] /** Conditions goes into here [], it gonna run once when the app components loads but also every single time posts changes  */
  );

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        ></img>
      </div>

      <h1>instaClone</h1>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
