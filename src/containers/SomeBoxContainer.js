import React from 'react';
import { connect } from 'react-redux';
import SomeBox from '../components/SomeBox';


const SomeBoxContainer = ({ number}) => {
  return (
    <SomeBox number={number} />
  );
};

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 콜백 함수 정의
// connection() 함수의 첫번째 인자로 전달할 콜백함수
const mapStateToProps = state => {
  return {
    number: state.counter.number,
  }
};

const connection = connect(mapStateToProps);
export default connection(SomeBoxContainer);
