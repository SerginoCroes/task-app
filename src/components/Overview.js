import React from "react";

export const Overview = ({ tasks, remove }) => {
  return (
    <ul>
      {tasks.map((item, index) =>
        <li key={index}>
          {index + 1} {item} <input type='button' value='delete' onClick={() => { remove(index) }} />
        </li>
      )}
    </ul>
  );
}
