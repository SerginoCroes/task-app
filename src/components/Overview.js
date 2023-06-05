import React from "react";

export const Overview = (props) => {

  const {tasks, remove} = props;

  return (
    <ul>
      {tasks.map((item, index) =>                 
        <li key={index}>
          {`${item} `} 
          <input type='button' value='delete' onClick={() => {remove(index)}} />
        </li>
      )}
    </ul>
  )  
}