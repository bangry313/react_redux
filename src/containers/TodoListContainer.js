import React from 'react';
import { connect } from 'react-redux';
import { createAddAction, createInputChangeAction, createRemoveAction, createUpdateAction } from '../store/todolist';
import TodoList from '../components/TodoList';

const TodoListContainer = ({ input, todoArray, inputChangeHandler, addHandler, removeHandler, updateHandler }) => {

  return (
    <TodoList input={input}
      todoArray={todoArray}
      inputChangeHandler={inputChangeHandler}
      addHandler={addHandler}
      removeHandler={removeHandler}
      updateHandler={updateHandler} />
  );
};

const mappingStateToProps = (state) => {
  return {
    input: state.todolist.input,
    todoArray: state.todolist.todoList,
  }
};

const mappingDispatchToProps = (dispatch) => {
  return {
    inputChangeHandler: (title) => {
      dispatch(createInputChangeAction(title));
    },

    addHandler: (title) => {
      if (!title || title.trim().length === 0) return;
      dispatch(createAddAction(title));
    },

    removeHandler: (id) => {
      dispatch(createRemoveAction(id));
    },

    updateHandler: (id) => {
      dispatch(createUpdateAction(id));
    }
  };
}

const connection = connect(mappingStateToProps, mappingDispatchToProps);
export default connection(TodoListContainer);
