import React from "react";
import '../App.css';

import { useState } from "react";

const AccordionItem = (props) => {
    return (
        <>
        <div className='item'>
            <div className='title'>
              <h2>{props.question}</h2>
              <span>{props.selected === props.i ? '-' : '+'}</span>
            </div>
            <div className={props.selected === props.i ? 'content show' : 'content'}>
              <p className="answerText">{props.answer}</p>
            </div>
          </div>
        </>
    )
}

export default AccordionItem;