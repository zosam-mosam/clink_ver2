import React from 'react'
import Logo from "../images/maru.jpg";
import "../styles/PostComment.scss";

export default function PostComment() {
  return (
    <>
        <br />
        <div className="CommunityPost">
          <div className="CommunityPostProfile">
            <div className="CommunityPostProfileImg">
              <img src={Logo} alt="Profile" />
            </div>
            <div className="CommunityPostProfileText">
              <p className="CommunityPostProfileNickname">writer</p>
              <p className="CommunityPostProfileTime">2분 전</p>
            </div>
          </div>
          <br />
          <div className="CommunityPostContent">boardContent</div>
          <br />
        </div>
    </>
  )
}
