import React, { useEffect, useState } from 'react';
import classes from './ToDoItem.module.css';
import cancelIcon from './assets/icon-cross.svg';
import checkIcon from './assets/icon-check.svg'

const ToDoItem = (props) => {

    const [isCompleted, setIsCompleted] = useState(props.isCompleted);

    useEffect(() => {
        props.updateMarkCompleted(isCompleted, props.id)
    }, [isCompleted]);

    function onMarkCompletedClicked() {
        setIsCompleted(prevState => {
            return !prevState
        });
    }

    function onDeleteClicked() {
        props.onItemDelete(props.id)
    }

    return (
        <div className={`${classes['todo-item']} ${!isCompleted && classes['todo-done']} ${props.index == 0 && classes['top-radius']}`}>
            <div className={`${classes['circle-div']} ${isCompleted && classes['completed']}`} onClick={onMarkCompletedClicked}><img src={checkIcon} /></div>
            <span className={`${isCompleted && classes['text-completed']}`}>{props.item}</span>
            <img id={classes['deleteItem']} src={cancelIcon} onClick={onDeleteClicked} />
        </div>
    )
}

export default ToDoItem