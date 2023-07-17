import React from "react";
import "../styles/WritingPost.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CommunityHeader from "../components/community/CommunityHeader";
import WritingCategory from "../components/community/WritingCategory";
import PostTagInput from "../components/community/PostTagInput";

export default function WritingPost() {
  return (
    <div className="WritingPost">
      <CommunityHeader></CommunityHeader>
      <WritingCategory></WritingCategory>
      <Form>
        <Form.Group className="" controlId="formPost">
          <Form.Control type="text" placeholder="제목을 입력하세요" />
          <br />
          <Form.Control as="textarea" rows={13} placeholder="내용을 입력하세요" />
        </Form.Group>
      </Form>
      <PostTagInput></PostTagInput>
      <div className="d-grid gap-2">
        <Button>글 작성</Button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
