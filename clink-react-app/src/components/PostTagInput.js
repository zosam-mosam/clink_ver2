import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {X} from 'react-bootstrap-icons'
export default function PostTagInput() {
  return (
    <>
        <Form>
            <Form.Control type="text" placeholder='태그...'>
            </Form.Control>
            <Button>태그입력</Button>
            <div className='SetTag'>
                <Button variant="outline-primary">태그1<X/></Button>
                <Button variant="outline-primary">태그2<X/></Button>
                <Button variant="outline-primary">태그3<X/></Button>
                <Button variant="outline-primary">태그4<X/></Button>
            </div>
        </Form>
    </>
  )
}
