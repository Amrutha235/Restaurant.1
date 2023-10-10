import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import child component in parent component
import Restcard from '../Restcard/Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Allrest() {

  const [allRestaurants,setAllrestaurants]=useState([])
const fetchData=async()=>{
  const response =await axios.get('http://localhost:3001/restaurants')
  console.log(response.data);
  setAllrestaurants(response.data)
}
console.log(allRestaurants);
useEffect(()=>{
  fetchData()
},[])

  return (
    <div>
     <Row>
      {
         
          allRestaurants.map((item)=>(

<Col sm={12} md={6} lg={4} xl={3}>
<Restcard restaurants={item}/>

</Col>
            ))
        }
      
     </Row>
  </div>
  )
}

export default Allrest