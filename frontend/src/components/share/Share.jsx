import React from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImage" />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <div className="shareOptionText">Photo or Video</div>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <div className="shareOptionText">Tag</div>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <div className="shareOptionText">Location</div>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <div className="shareOptionText">Feelings</div>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
