import React, { useState } from 'react'
import CommunityHeader from '../components/CommunityHeader'
import CommunityCategory from '../components/CommunityCategory'
import CommunityFilter from '../components/CommunityFilter'
import CommunityPost from '../components/CommunityPost'
import CommunityPostButton from '../components/CommunityPostButton'
import postsData from '../dummydata/postsData.json';
import '../styles/CommunityContainer.scss'

export default function Community() {
  return (
    <div className='CommunityContainer'>
        <CommunityHeader></CommunityHeader>
        <CommunityCategory></CommunityCategory>
        <CommunityFilter></CommunityFilter>
        {postsData.boards.map((post, id) => (<CommunityPost post={post} key={id}></CommunityPost>))}

        <CommunityPostButton></CommunityPostButton>
    </div>
  )
}
