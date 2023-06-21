import React, { useRef } from 'react';
import classes from './InputToDo.module.css';

const InputToDo = (props) => {

  const inputRef = useRef("");

  function onEnterInput(e) {
    if (e.key === "Enter") {
      var i = inputRef.current.value;
      if (i.trim() != '') {
        const todoItem = {
          id: Math.random(),
          item: i,
          isCompleted: false
        }
        props.onAddNewToDo(todoItem);
        
      }
      document.getElementById('inputToDo').value = '';
    }
  }


  return (
    <div className={classes['input-todo']}>
      <div id={classes['circleDiv']}></div>
      <input id='inputToDo' type='text' placeholder='Create a new todo...' ref={inputRef} onKeyDown={onEnterInput} />
    </div>
  )
}

export default InputToDo