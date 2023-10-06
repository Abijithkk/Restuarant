import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';



function Reviews({ReviewData}) {
  return (
    <div>
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header> <b>Review</b> </Accordion.Header>
      <Accordion.Body>
        {
            ReviewData?ReviewData.map(i=>(
<div>
    <p><b>Name:</b>{i.name}</p>
    <p><b>Date:</b>{i.date}</p>
    <p><b>Rating:</b>{i.rating}</p>
    <p><b>Comments:</b>{i.comments}</p>

</div>
            )): <h1>No Reviews</h1>

        }
      
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
</div>
  )
}

export default Reviews