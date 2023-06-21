import React from 'react';
import classes from './Actions.module.css';

const Actions = (props) => {
    return (
        <div className={classes['parent-div']}>
            <div className={classes['main-div']}>
                <div>{props.numActiveItems} items left</div>
                <div className={classes['filters-div']}>
                    <span className={`${props.filter == 'All' && classes['active']}`} onClick={props.handleFilterChange}>All</span>
                    <span className={`${props.filter == 'Active' && classes['active']}`} onClick={props.handleFilterChange}>Active</span>
                    <span className={`${props.filter == 'Completed' && classes['active']}`} onClick={props.handleFilterChange}>Completed</span>
                </div>
                <div className={classes['clear-completed-div']} onClick={props.clearCompleted}>Clear Completed</div>
            </div>
        </div>

    )
}

export default Actions