import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function Operating({OperatingData}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="danger" className='w-100 p-3' onClick={handleShow}>
      <b className='fs-3'>Operating Hours</b>
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className='text-center'>
        <Modal.Title> <b className='text-danger text-center'>Operating Hours</b></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup>
      <ListGroup.Item className=' fs2'> <b>Monday</b> :{OperatingData.Monday}</ListGroup.Item>
      <ListGroup.Item className='mt-2 fs2'> <b>Tuesday</b> :{OperatingData.Tuesday}</ListGroup.Item>
      <ListGroup.Item className='mt-2 fs2'> <b>Wednesday</b> :{OperatingData.Wednesday}</ListGroup.Item>
      <ListGroup.Item className='mt-2 fs2'> <b>Thursday</b> :{OperatingData.Thursday}</ListGroup.Item>
      <ListGroup.Item className='mt-2 fs2'> <b>Friday</b> :{OperatingData.Friday}</ListGroup.Item>
      <ListGroup.Item className='mt-2 fs2'> <b>Saturday</b> :{OperatingData.Saturday}</ListGroup.Item>
      <ListGroup.Item className='mt-2 fs2'> <b>Sunday</b> :{OperatingData.Sunday}</ListGroup.Item>

    </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
        <b>Close</b>
        </Button>
      
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Operating