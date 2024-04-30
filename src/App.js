import CounterContainer from "./containers/CounterContainer";
import SomeBoxContainer from "./containers/SomeBoxContainer";
import TodoListContainer from "./containers/TodoListContainer";
import TodoListBoxContainer from "./containers/TodoListBoxContainer";

function App() {
  return (

    // <div>
    //   <h2>리덕스 사용하기</h2>
    //   <Counter number={0}/>
    // </div>

    <div>
      <CounterContainer />
      <CounterContainer />
      <SomeBoxContainer />

      {/* <TodoList /> */}
      <TodoListContainer />
      {/* <TodoListBox /> */}
      <TodoListBoxContainer />

    </div>

  );
}

export default App;
