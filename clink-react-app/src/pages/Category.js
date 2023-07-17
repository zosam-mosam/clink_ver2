import React, { useState } from "react";
import CommunityHeader from "../components/community/CommunityHeader";
import CommunityCategory from "../components/community/CategoryTab";
import CommunityFilter from "../components/community/CommunityFilter";
import CommunityPost from "../components/community/CommunityPost";
import CommunityPostButton from "../components/community/CommunityPostButton";
import postsData from "../dummydata/postsData.json";
import "../styles/CommunityContainer.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Community() {
  return (
    <div className="CommunityContainer">
      <CommunityHeader></CommunityHeader>
      <CommunityCategory></CommunityCategory>
      <CommunityFilter></CommunityFilter>
      {postsData.boards.map((post, id) => (
        <CommunityPost
          post={post}
          key={id}
        ></CommunityPost>
      ))}
      <CommunityPostButton></CommunityPostButton>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
