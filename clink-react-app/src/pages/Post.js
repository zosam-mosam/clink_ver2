import React from "react";
import CommunityPost from "../components/community/CommunityPost";
import postsData from "../dummydata/postsData.json";
import PostCommentInput from "../components/community/PostCommentInput";
import PostComment from "../components/community/PostComment";
import CommunityHeader from "../components/community/CommunityHeader";
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
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}
