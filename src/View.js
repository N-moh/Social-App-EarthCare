import React from 'react';
import Posts from './Posts';
import './App.css';


function View(props){
  
    function likeHandler(email){
     props.likeHandler(email);
    
    }
      
    const buildRows = () =>  {
    return props.activeTodoArray.map((current) => {
      if(current.email == undefined) {
        return (
          <>
          </>
          );
      } else {

      return (
        <Posts  id={current.id} email={current.email} comments={current.comments} signup={current.signup} likes={current.likes} likeHandler={likeHandler} />
      ) }

    }
      
    
    );
  };


    return (
      <>
       
            {buildRows()}
       
      </>
    );

}
export default View;
