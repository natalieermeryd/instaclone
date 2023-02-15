import React, { useState } from "react";
import "./App.css";

import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "natta.es",
      caption: "it works",
      imageUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43ccba0f-17af-4790-942a-37643349e68e/d38xqpt-d64e490b-1fc7-44a2-804d-bc683bd3d87b.jpg/v1/fill/w_800,h_758,q_75,strp/water_drop_by_othzen_d38xqpt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzY2NiYTBmLTE3YWYtNDc5MC05NDJhLTM3NjQzMzQ5ZTY4ZVwvZDM4eHFwdC1kNjRlNDkwYi0xZmM3LTQ0YTItODA0ZC1iYzY4M2JkM2Q4N2IuanBnIiwiaGVpZ2h0IjoiPD03NTgiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzQzY2NiYTBmLTE3YWYtNDc5MC05NDJhLTM3NjQzMzQ5ZTY4ZVwvb3RoemVuLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.OWn5p-LZiKX7rPjnZqRDjnS3sRXHkyRzTQH-wQ_cEDQ",
    },
    {
      username: "hoorigram",
      caption: "hoorigram is the shit",
      imageUrl:
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR4KP0sEPRfzdEXr8GXecgOu6QrPYLO0N_jz2Lyd6Ng-dsY3yWuRdwEyle5QobuLsQHzNEkfd7CCswpRUxLtO0",
    },
    {
      username: "apnangram",
      caption: "apnangram ftw",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      username: "carogram",
      caption: "backendlover",
      imageUrl:
        "https://d3s3zh7icgjwgd.cloudfront.net/AcuCustom/Sitename/DAM/093/Tempest-Rose-Credit-House-of-Burlesque_Main.png",
    },
    {
      username: "santagram",
      caption: "spain at last",
      imageUrl:
        "https://sh-assets.holidu.com/imagecache/blog-photos/17596_Fill_800_800.jpg",
    },
    {
      username: "bamigram",
      caption: "hello world",
      imageUrl:
        "https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_808,h_2665,w_5330,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1000,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1jkj1ycnt2-the-residences-at-newcity/uploads/DS1527_4147_buj9li.jpg",
    },
  ]);
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        ></img>
      </div>

      <h1>InstaClone</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imgUrl={post.imageUrl}
        />
      ))}

      <Post
        username="natta.es"
        caption="it works"
        imageUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/43ccba0f-17af-4790-942a-37643349e68e/d38xqpt-d64e490b-1fc7-44a2-804d-bc683bd3d87b.jpg/v1/fill/w_800,h_758,q_75,strp/water_drop_by_othzen_d38xqpt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzY2NiYTBmLTE3YWYtNDc5MC05NDJhLTM3NjQzMzQ5ZTY4ZVwvZDM4eHFwdC1kNjRlNDkwYi0xZmM3LTQ0YTItODA0ZC1iYzY4M2JkM2Q4N2IuanBnIiwiaGVpZ2h0IjoiPD03NTgiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzQzY2NiYTBmLTE3YWYtNDc5MC05NDJhLTM3NjQzMzQ5ZTY4ZVwvb3RoemVuLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.OWn5p-LZiKX7rPjnZqRDjnS3sRXHkyRzTQH-wQ_cEDQ"
      />
      <Post
        username="hoorigram"
        caption="hoorigram is the shit"
        imageUrl="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR4KP0sEPRfzdEXr8GXecgOu6QrPYLO0N_jz2Lyd6Ng-dsY3yWuRdwEyle5QobuLsQHzNEkfd7CCswpRUxLtO0"
      />
      <Post
        username="apnangram"
        caption="apnangram ftw"
        imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      />
      <Post
        username="carogram"
        caption="backendlover"
        imageUrl="https://d3s3zh7icgjwgd.cloudfront.net/AcuCustom/Sitename/DAM/093/Tempest-Rose-Credit-House-of-Burlesque_Main.png"
      />
      <Post
        username="santagram"
        caption="spain finally"
        imageUrl="https://sh-assets.holidu.com/imagecache/blog-photos/17596_Fill_800_800.jpg"
      />
      <Post
        username="bamigram"
        caption="hello world"
        imageUrl="https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_808,h_2665,w_5330,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1000,w_2000/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1jkj1ycnt2-the-residences-at-newcity/uploads/DS1527_4147_buj9li.jpg"
      />
    </div>
  );
}

export default App;
