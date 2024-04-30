// redux 연동 모듈
// 액션 타입
export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';


// 액션 생성 함수
export const createIncreaseAction = () => ({ type: INCREASE });
export const createDecreaseAction = () => ({ type: DECREASE });

// state 초기 설정
const initialState = {
  number: 0,
};

//  리듀서 함수 정의
function actionPerformed(state = initialState, action) {
  // 전달 받은 액션 타입별로 현재 state를 참조하여 
  // state에 저장할 새로운 객체 생성 및 반환
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      }
    case DECREASE:
      return {
        number: state.number - 1,
      }
    default:
      return state;
  }
}
export default actionPerformed;

