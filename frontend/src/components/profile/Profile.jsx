import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import "./profile.css";
import { useParams } from "react-router";

export default function Profile() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username
  console.log("suser", username);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={pf + "post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={pf + "/person/7.jpeg"}
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.userName}</h4>
              <span className="profileInfoDesc">{user.email}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Peter" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
