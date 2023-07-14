import React from "react";
import CommunityPost from "../components/CommunityPost";
import postsData from "../dummydata/postsData.json";
import PostCommentInput from "../components/PostCommentInput";
import PostComment from "../components/PostComment";
import CommunityHeader from "../components/CommunityHeader";
export default function Post() {
  return (
    <div className="PostContainer">
      <CommunityHeader></CommunityHeader>
      <CommunityPost post={postsData.boards[0]}></CommunityPost>
      <PostComment></PostComment>
      <PostComment></PostComment>
      <PostComment></PostComment>
      <PostComment></PostComment>
      <PostComment></PostComment>
      <PostCommentInput></PostCommentInput>
      <br />
      <br />
    </div>
  );
}
