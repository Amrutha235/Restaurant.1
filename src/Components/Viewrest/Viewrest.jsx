import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';
import Restreview from '../Restreview/Restreview';

function Viewrest() {
    //get path parameter
    // const pathParameter =useParams()
    // console.log(pathParameter);//id:2
    // console.log(pathParameter.id);


    //destructure parameter
    const {id}=useParams()
    console.log(id);

    const[RestDetails,SetRestDetails]=useState({})

    //Api call for get particular restaurant details
    const fetchData =async()=>{
        const response =await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(response.data);
        SetRestDetails(response.data)
    }
console.log(RestDetails);

    useEffect(()=>{
        fetchData();
    },[] )

  return (
    <div>
        <Row>
            <Col>
            {/*image*/}
           <img src={`${RestDetails.photograph}`} alt="" srcset="" style={{width:'400px',margin:'20px',height:'500px',borderRadius:'20px'}}/>
            </Col>
            <Col>
            {/*content*/}
            <ListGroup>
            <ListGroup.Item>Name:{RestDetails.name}</ListGroup.Item>
      <ListGroup.Item>Address:{RestDetails.address}</ListGroup.Item>
      <ListGroup.Item>cuisine Type:{RestDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood:{RestDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><Restop op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview rw={RestDetails.reviews}/></ListGroup.Item>
            </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default Viewrest