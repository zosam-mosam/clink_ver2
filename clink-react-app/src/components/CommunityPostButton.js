import React from 'react'
import '../styles/CommunityPostButton.scss'
import {PencilSquare} from 'react-bootstrap-icons'

export default function CommunityPostButton() {
  return (
    <button className='CommunityPostButton' ><PencilSquare style={{width:30, height:30}}/></button>

  )
}
