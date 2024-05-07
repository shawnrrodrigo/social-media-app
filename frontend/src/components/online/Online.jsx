import React from "react";

function Online({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img
            src={pf+user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarFriendName">{user.username}</span>
      </li>
    </div>
  );
}

export default Online;
