import React, { useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
import axios from "axios";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("posts/profile/"+username): await axios.get("posts/timeline/6610d774ce088f9883fe21e8");
      setPosts(res.data)
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
