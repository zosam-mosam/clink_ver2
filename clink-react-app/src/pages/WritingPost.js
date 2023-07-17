import React from 'react';
import '../styles/WritingPost.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CommunityHeader from '../components/community/CommunityHeader';
import WritingCategory from '../components/community/WritingCategory';
import PostTagInput from '../components/community/PostTagInput';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function WritingPost() {
  const insertPost = () => {
    axios.get('http://localhost:8081/insertPost');
    alert('gkdl');
  };
  return (
    <div className="WritingPost">
      <CommunityHeader></CommunityHeader>
      <WritingCategory></WritingCategory>
      <Form action="http://localhost:8081/insertPost" method="get">
        <Form.Group className="" controlId="formPost">
          <Form.Control type="text" placeholder="제목을 입력하세요" />
          <br />
          <Form.Control as="textarea" rows={13} placeholder="내용을 입력하세요" />
        </Form.Group>
        <PostTagInput></PostTagInput>
        <Button
          type="submit"
          // onClick={() => {
          //   insertPost();
          // }}
          style={{ width: '80%' }}
        >
          글 작성
        </Button>
      </Form>

      <br />
      <br />
      <br />
    </div>
  );
}
