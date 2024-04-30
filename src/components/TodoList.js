import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ input, todoArray, inputChangeHandler, addHandler, removeHandler, updateHandler }) => {

  const inputTF = useRef('');

  const handleInputChange = (event) => {
    console.log("input change");
    inputChangeHandler(event.target.value);
  }

  const handleAddBtn = (event) => {
    event.preventDefault();
    addHandler(input);
    inputChangeHandler('');
    inputTF.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleAddBtn}>
        <input onChange={handleInputChange} value={input} ref={inputTF} />
        <button type="submit">등록</button>
      </form>
      <div>
        {/* <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
        {
          todoArray.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeHandler={removeHandler}
              updateHandler={updateHandler}
            />
          ))
        }
      </div>
    </div>
  );
};

export default TodoList;
