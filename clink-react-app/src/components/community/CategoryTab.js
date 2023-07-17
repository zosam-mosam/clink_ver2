import React from "react";
import "../../styles/CommunityCategoryTab.scss";
import { Navigate, useNavigate } from "react-router-dom";

export default function CommunityCategory() {
  const navigate = useNavigate();
  return (
    <div className="CommunityCategoryContainer">
      <p
        onClick={() => {
          navigate("/community/category?categoryNo=0");
        }}
      >
        베스트
      </p>
      <p
        onClick={() => {
          navigate("/community/category?categoryNo=1");
        }}
      >
        자유
      </p>
      <p
        onClick={() => {
          navigate("/community/category?categoryNo=2");
        }}
      >
        정보
      </p>
      <p
        onClick={() => {
          navigate("/community/category?categoryNo=3");
        }}
      >
        공지
      </p>
    </div>
  );
}
