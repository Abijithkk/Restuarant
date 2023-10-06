import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';








function Home() {
  const [restaurants,setRestaurants]=useState([])
  //function api call
const getAllRestaurant=async()=>{
  const result=await axios.get('/restaurants.json')
  setRestaurants(result.data.restaurants);

}
useEffect(()=>{
 getAllRestaurant()
},[])
console.log(restaurants);
  return (
<div className='bg-black'>
<Row>
  <Col  className='p-5 ms-5 mt-3'>
    <h1 className='m-3 text-light'><b><span style={{color:'red'}}>T</span>aste <span style={{color:'red'}}>T</span>he <span style={{color:'red'}}>B</span>est <span style={{color:'red'}}>T</span>hat <span style={{color:'red'}}>S</span>urprise </b><span style={{color:'red'}}>Y</span>ou</h1>
    <p className='m-3 test-start '>Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, consequuntur hic doloremque laudantium quasi enim, officiis neque quo vel autem obcaecati praesentium totam iusto fuga, doloribus nulla velit dignissimos labore.ipsum dolor sit amet, consectetur adipisicing elit. Fugit mollitia molestiae ex, aperiam odio earum eaque. Molestiae eligendi, illum, repellat dicta ipsam ratione atque alias reiciendis minima officia nam ducimus.</p>
  </Col>
  <Col className='p-5 ms-5'>
    <img className='w-75' style={{height:'450px'}}
     src="https://i.postimg.cc/QCjH5XT9/pngegg.png" alt="" />
  </Col>
</Row>
<hr />

    <Container >
    <Row >
      {
        restaurants.length>0?restaurants.map(i=>
          
            <Col  xs={12} sm={6} lg={4} md={6}>
              <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
            <Card  style={{ width: '18rem',height:'550px' }} className='mt-3 bg-dark'>
      <Card.Img
      style={{height:'445px',marginLeft:'0px'}}
      variant="top" src={i.photograph}/>
      <Card.Body>
        <Card.Title className='text-center text-danger'>{i.name}</Card.Title>
        <Card.Text className='text-white'>
          <b >Address</b>:{i.address}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </Col>
          
          ):<h1>No  data present</h1>
      }
    </Row>
    </Container>
    </div>
  )
}

export default Home