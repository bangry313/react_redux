import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { createIncreaseAction, createDecreaseAction } from '../store/counter';


// 리덕스 스토어에 연결하여 원하는 상태를 받아오고,
// 액션을 디스패치해 주기 위한 역할의 컨테이너 컴포넌트
const CounterContainer = ({ number, increaseCounter, decreaseCounter }) => {
  return (
    <Counter number={number} handleIncrease={increaseCounter} handleDecrease={decreaseCounter} />
  );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 콜백 함수 정의
// connection() 함수의 첫번째 인자로 전달할 콜백함수
const mapStateToProps = state => {
  return {
    number: state.counter.number,
  }
};

// 액션 생성함수(actionPerformed)를 컴포넌트의 props로 넘겨주기 위해 사용하는 콜백 함수 정의
// connection() 함수의 두번째 인자로 전달할 콜백함수
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => {
      // console.log("카운트 증가");
      // 액션객체 생성 및 디스패치
      // dispatch(createIncreaseAction());
      dispatch({ type: "counter/INCREASE" });
    },
    decreaseCounter: () => {
      // console.log("카운트 감소");
      dispatch(createDecreaseAction());
    }
  };
}

const connection = connect(mapStateToProps, mapDispatchToProps);

export default connection(CounterContainer);
