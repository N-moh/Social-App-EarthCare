import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';

function Count() {
const [count, setCount] = useState([0,0,0,0,0]);

function updateCount(index){
    let newCount=[...count]
    newCount[index]=newCount[index]+1
    setCount(newCount)
}

  return (
    <CardGroup>
        
    <Card className = "cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic1.jpg" />
        <Card.Body className="Nature"     >
          <Card.Title>Nature</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text> Protect nature by reducing deforestation.</Card.Text>
          
          <p>{count[0]}</p>
        <Button onClick={() => updateCount(0)}>
        Vote
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic2.jpg" />
        <Card.Body className="Oceans" >
          <Card.Title>Oceans</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text>Clean up our oceans and protect sealife</Card.Text>
          <p>{count[1]}</p>
        <Button onClick={() => updateCount(1)}>
        Vote
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic3.jpg" />
        <Card.Body className="Waste" >
          <Card.Title> Waste</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            
          </Card.Subtitle>
          <Card.Text>Reduce waste by recycling and reusing.</Card.Text>
          <p>{count[2]}</p>
        <Button onClick={() => updateCount(2)}>
        Vote
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic4.jpg" />
        <Card.Body className="Climate" >
          <Card.Title>Climate change</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text>Prevent the climate from overheating</Card.Text>
          <p>{count[3]}</p>
        <Button onClick={() => updateCount(3)}>
        Vote
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      <Card className="cards">
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src="pic5.jpg" />
        <Card.Body className="Air" >
          <Card.Title>Air Pollution</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
        
          </Card.Subtitle>
          <Card.Text>Reduce emissions from fossil fuels </Card.Text>
          <p>{count[4]}</p>
        <Button onClick={() => updateCount(4)}>
        Vote
         </Button>
          
        </Card.Body>
      </Card>
      </Card>
      
      </CardGroup>  
  );
}
export default Count;
