import React from 'react'
import CommunityPost from '../components/CommunityPost'
import postsData from '../dummydata/postsData.json';

export default function Post() {
  return (
    // <PostHeader></PostHeader>
    <CommunityPost post={postsData.boards[0]}></CommunityPost>
    // <PostComment></PostComment>
  )
}
