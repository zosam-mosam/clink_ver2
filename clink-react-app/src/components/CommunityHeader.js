import React from 'react'
import {ChevronLeft} from 'react-bootstrap-icons'
import '../styles/CommunityHeader.scss'

export default function CommunityHeader() {
  return (
    <div className='HeaderContainer'>
        <div className='HeaderContainerContent'>
            <p>
                <ChevronLeft></ChevronLeft>
                &nbsp;커뮤니티
            </p>
        </div>
    </div>
  )
}
