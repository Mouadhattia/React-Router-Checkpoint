import React from 'react'
import { Button,Modal } from 'react-bootstrap';
import {useState} from 'react';


function Add({AddMovies}) {
    const [addmovie, setAddmovie] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = (event) => {
        setAddmovie((oldstate) => ({
            ...oldstate, [event.target.name]: event.target.value
        }))
    }
    return (
        <div className='add'>
             
      <Button variant="primary" onClick={handleShow}>
      Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                Title:
                <input type="text" name="title" onChange={handleAdd}/>
            </div>
            <div>
                Description: 
                <input type="text" name="description" onChange={handleAdd}/>
            </div>
            <div>
                Image:
                <input type="text" name="posterURL" onChange={handleAdd}/>
            </div>
            <div>
                 Rating:
                <input type="text" name="rating" onChange={handleAdd}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
              AddMovies(addmovie);
              handleClose()
        }} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   
        </div>
    )
}

export default Add

