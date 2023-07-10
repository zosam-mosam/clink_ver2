import React from "react";
import "../styles/WritingPost.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CommunityHeader from "../components/CommunityHeader";

export default function WritingPost() {
  return (
    <div className="WritingPost">
      <CommunityHeader></CommunityHeader>
      <div>카테고리선택</div>
      <Form>
        <Form.Group className="" controlId="formPost">
          <Form.Control as="textarea" rows={15} />
        </Form.Group>
      </Form>
      <div>태그입력</div>
      <div className="d-grid gap-2">
        <Button>글 작성</Button>
      </div>
    </div>
  );
}
