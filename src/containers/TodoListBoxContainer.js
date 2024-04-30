import React from 'react';
import { connect } from 'react-redux';
import TodoListBox from '../components/TodoListBox';

const TodoListBoxContainer = ({ todoArray }) => {

  return (
    <TodoListBox todoArray={todoArray} />
  )
};

const mappingStateToProps = (state) => {
  return {
    todoArray: state.todolist.todoList,
  }
};

export default connect(mappingStateToProps)(TodoListBox);
