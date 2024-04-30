// 일정 관리 관련 액션 타입
const INPUT_CHANGE = 'todolist/INPUT_CHANGE';  // 일정 입력값 변경
const ADD_TODO = 'todolist/ADD_TODO';          // 일정 등록
const UPDATE_TODO = 'todolist/UPDATE_TODO';    // 일정 수정
const REMOVE_TODO = 'todolist/REMOVE_TODO';    // 일정 제거


/** 액션 생성 함수 */
export const createInputChangeAction = inputValue => {
  const action = {
    type: INPUT_CHANGE,
    input: inputValue,
  };
  return action;
}

/** 일정 임시 id */
let id = 4;

/** 일정 등록 액션 생성 함수 */
export const createAddAction = title => {
  return {
    type: ADD_TODO,
    todo: {
      id: id++,
      title: title,
      complete: false,
    }
  };
}

/** 일정 삭제 액션 생성 함수 */
export const createRemoveAction = id => {
  return {
    type: REMOVE_TODO,
    id: id
  };
}

/** 일정 수정 액션 생성 함수 */
export const createUpdateAction = id => {
  return {
    type: UPDATE_TODO,
    id: id
  };
}

/** store의 state에 저장할 임시 더미 데이터 */
const initialState = {
  input: '',
  todoList: [
    { id: 1, title: '루니 산책시키기', complete: false },
    { id: 2, title: '저녁밥 해먹기', complete: false },
    { id: 3, title: '청소하기', complete: false },
  ]
};

/** state에 저장할 객체 생성 및 반환 리듀서 함수 */
function reduce(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, input: action.input };
    case ADD_TODO:
      // console.log(state);
      return {
        // todoList: state.todoList.concat(action.todo),
        todoList: [...state.todoList, action.todo],
      };
    case REMOVE_TODO:
      return {
        todoList: state.todoList.filter(todo => todo.id !== action.id)
      };
    case UPDATE_TODO:
      return {
        todoList: state.todoList.map(todo => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)
      };
    default:
      return state;
  }
}

export default reduce;
