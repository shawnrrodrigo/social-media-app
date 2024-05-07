import React, { useState, useEffect } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLikeClicked = () => {
    console.log("function called");
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.userName}`}>
              <img
                src={user.profilePicture || pf + "person/noAvatar.jpg"}
                alt=""
                className="postProfileImage"
              />
            </Link>
            <div className="postProfileName">{user.userName}</div>
            <div className="postDate">{format(post.createdAt)}</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post?.desc}</div>
          <img src={pf + post?.img} alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="likeImage"
              onClick={handleLikeClicked}
            />
            <span className="likeCounter">{like} Like this</span>
          </div>
          <div className="postBottomRight"> {post.comment} Comments</div>
        </div>
      </div>
    </div>
  );
}
