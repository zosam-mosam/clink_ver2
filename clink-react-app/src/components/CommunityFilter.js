import React from 'react'
import '../styles/CommunityFilter.scss'
import Button from 'react-bootstrap/Button';

export default function CommunityFilter() {
  return (
    <div className='CommunityFilterContainer'>
        <Button variant="outline-primary" size="sm">최신순</Button>{' '}
        <div className="CommunityTagList">
            <Button variant="primary" size="sm">#안녕</Button>{' '}
            <Button variant="primary" size="sm">#집가고싶다</Button>{' '}
            <Button variant="primary" size="sm">#안녕</Button>{' '}
            <Button variant="primary" size="sm">#집가고싶다</Button>{' '}
            <Button variant="primary" size="sm">#안녕</Button>{' '}
        </div>
    </div>
    
  )
}
