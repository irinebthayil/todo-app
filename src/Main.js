import React, { useEffect, useState } from 'react';
import classes from './Main.module.css';
import moonIcon from './assets/icon-moon.svg';
import sunIcon from './assets/icon-sun.svg'
import InputToDo from './InputToDo';
import ToDoItem from './ToDoItem';
import Actions from './Actions';

const defaultList = [
  {
    id: 1,
    item: "Let's get things done!",
    isCompleted: true
  }
];

const Main = (props) => {

  const [todoItemsList, setToDoItemsList] = useState(defaultList);

  const [filteredList, setFilteredList] = useState([]);

  const [numActiveItems, setNumActiveItems] = useState(0);

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    
    if (filter == "Completed") {
      const completedItems = todoItemsList.filter(item => {
        return item.isCompleted == true;
      })
      setFilteredList(completedItems);
    }
    else if (filter == "Active") {
      const activeItems = todoItemsList.filter(item => {
        return item.isCompleted == false;
      })
      setFilteredList(activeItems);
    }
    else {
      const all = [...todoItemsList];
      setFilteredList(all);
    }

    const incompleteList = todoItemsList.filter(item =>
      item.isCompleted == false
    );
    setNumActiveItems(incompleteList.length);

  }, [filter, todoItemsList]);

  function onAddNewToDo(todoItem) {
    setToDoItemsList(prevList => {
      return [...prevList, todoItem];
    });
  }

  function onItemDelete(id) {
    setToDoItemsList(prevList => {
      return [
        ...prevList.filter(item => (
          item.id != id
        ))
      ]
    })
  }

  function updateMarkCompleted(isCompleted, id){
    const updatedList = todoItemsList.map(item => {
      if(item.id == id)
      {
        return {...item, isCompleted: isCompleted}
      }
      return item;
    })

    setToDoItemsList(updatedList);
  }

  function handleFilterChange(e){
    const selectedFilter = e.target.innerHTML
    setFilter(selectedFilter);
  }

  function clearCompleted(){
    setToDoItemsList(prevList => {
      return [
        ...prevList.filter(item => (
          item.isCompleted == false
        ))
      ]
    })
  }

  function toggleTheme(e){
    const s = e.target.alt
    if(s == "Dark Mode")
    {
      e.target.src = sunIcon;
      e.target.alt = "Light Mode"
      e.target.title = "Light Mode"
    }
    else{
      e.target.src = moonIcon;
      e.target.alt = "Dark Mode"
      e.target.title = "Dark Mode"
    }
    
    props.toggleTheme();
  }

  return (
    <div className={classes['main-parent-div']}>
      <div className={classes['main-header']}>
        <h1>TODO</h1>
        <img src={sunIcon} alt='Light Mode' title='Light Mode' onClick={toggleTheme}/>
      </div>
      <br></br><br></br>
      <InputToDo onAddNewToDo={onAddNewToDo} />
      <div className={classes['todo-items']}>
        {
          filteredList.map((item, index) => (
            <ToDoItem key={item.id} id={item.id} item={item.item} isCompleted={item.isCompleted} onItemDelete={onItemDelete} index={index} updateMarkCompleted={updateMarkCompleted} />
          ))
        }
      </div>

      <Actions filter={filter} numActiveItems={numActiveItems} handleFilterChange={handleFilterChange} clearCompleted={clearCompleted}/>
    </div>
  )
}

export default Main