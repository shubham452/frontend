import React, { useState } from "react";
import data from "./data";
import "./Accordion.css";
export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection]= useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleButtonClick(itemId) {
    setSelected(selected === itemId ? null : itemId);
  }
  function handleMultiSelection(itemId)
  {
    const cpyMutiple=[...multiple];
    const findIndexOfCurrentId=multiple.indexOf(itemId);
    if(findIndexOfCurrentId===-1)
    {
        cpyMutiple.push(itemId);
    }
    else{
        cpyMutiple.splice(findIndexOfCurrentId,1);
    }
    setMultiple(cpyMutiple);
  }
  return (
    <div className="wrapper">
    <button onClick={()=>setMultiSelection(!multiSelection)}>Enable Multi Selection</button>
      <div className="accord">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={multiSelection?()=>handleMultiSelection(dataItem.id):
                () => handleButtonClick(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              
              {multiSelection?
                (multiple.indexOf(dataItem.id)!==-1 && (
                    <div>{dataItem.answer}</div>
                ))
                :
              (selected===dataItem.id &&(
              <div>{dataItem.answer}</div>))
              }
            </div>
          ))
        ) : (
          <div>NO data found</div>
        )}
      </div>
    </div>
  );
};
