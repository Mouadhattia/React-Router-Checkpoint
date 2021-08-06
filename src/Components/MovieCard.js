import React from 'react'
import { Card,Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';

function MovieCard({movie}) {
    return (
      
        <div>
          
           <Card className='card' >
           
  <Card.Img style={{  height:'30rem' }} variant="top" src={movie.posterURL} />
  <Card.Body className='cardbody'>
    <Card.Title>{movie.title}</Card.Title>
    
    <Link to={`/Components/Trailer/${movie.id}`}> <Button variant="primary">Movie Details</Button></Link> 
    
    
    <div className='stars'>
    <ReactStars
    
    count={5}
    value={movie.rating}
    size={24}
    activeColor="#ffd700"
    edit= {false}
  />,  
  </div>   
          
         
    
  </Card.Body>
</Card> 

        </div>
        
    )
}

export default MovieCard
