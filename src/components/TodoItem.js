import React from 'react';

const TodoItem = ({ todo, removeHandler, updateHandler }) => {

  const handleRemoveBtn = (event) => {
    removeHandler(todo.id);
  }

  const handleToggleCB = (event) => {
    updateHandler(todo.id);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleToggleCB}
      />
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none ' }}>
        {todo.title}
      </span>
      <button onClick={handleRemoveBtn}>삭제</button>
    </div>
  );
};

export default TodoItem;
