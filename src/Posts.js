import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function Posts(props) {
  console.log(props);

  
  return (
     <Card style={{ width: "14rem" }}>
         <Card.Body className="Likes" id={props.id}>
         <Card.Text>{props.email}</Card.Text>
          <p>{props.comments}</p>
          <p>{props.signup}</p>
          <p>{props.likes}</p>
          <Button className="Likes" onClick={() => props.likeHandler(props.email)}>
            Likes
          </Button>
          
           </Card.Body>
      </Card>
  );
}
