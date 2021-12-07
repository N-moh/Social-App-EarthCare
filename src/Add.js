import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Add(props){
    const [state, setState]= useState({
      id: 0,
      email: "",
      comments: "",
      signup: false,
      likes : 0
    });

    const submitHandler= (e) => {
          e.preventDefault();
          props.submitHandler(state);
          toastr.success("Signing up !")
          setState({
            id:0,
            email: "",
            comments: "",
            signup: false,
          });
        };

        const handleChange = (event) => {
          const newState = {...state};
          if(event.target.name === "signup"){
            newState[event.target.name] = !state.completed;
          }else{
          newState[event.target.name] = event.target.value;
          }
          setState(newState);
        };

return(
  <div className="container">
    <Form onSubmit={(e) => submitHandler(e)}>
      <Form.Group controlId="taskID">
        <Form.Label>UserID</Form.Label>
        
        <Form.Control 
        
        name="id" 
        type="number" 
        value={state.id}
        onChange={(e)=>handleChange(e)}
        />
        
      </Form.Group>
     

      <Form.Group controlId="taskDescription">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        name="email"
        type="text" 
        value={state.email}
        onChange={(e)=>handleChange(e)}
         />

      
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comments</Form.Label>
    <Form.Group>
      <Form.Select aria-label="Floating label select example">
        <option>choose a category </option>
        <option value="1">Protect and restore nature</option>
        <option value="2">Revive our oceans</option>
        <option value="3">Build a waste-free world</option>
        <option value="4">Fix our climate</option>
        <option value="5">Clean our air</option>
      </Form.Select>
      </Form.Group>
    <Form.Control name="comments" as="textarea" rows={3} onChange={(e)=>handleChange(e)} />
  </Form.Group>

      <Form.Group controlId="complete">
      
        <Form.Check 
        label="Sign up?"
        name="signup" 
        type="checkbox" 
        value={state.signup}
        onChange={(e)=>handleChange(e)}>
          
        </Form.Check>
        </Form.Group>

      <Button variant="primary" type="submit"> 
        Register
      </Button>

    </Form>
  </div>
);
}

export default Add;