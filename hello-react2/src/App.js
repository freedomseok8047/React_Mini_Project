// js import 키워드 사용하는데
// 탈 웹브라우저, 즉 ,로컬에서 ,자바 스트립트 이용한다.
// node -> 리액트 프로젝트 생성 -> 그 프로잭트 내에서 ,특정기능 (npm) 설치 가능

import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  // JSX 문법 소개
  // return 이라는 키워드 안에 , html 테그들이 사용되고 있음
  // return (
  //   <div>
  //   <h1>hello React</h1>
  //   <h2>동작 잘하나요?</h2>
  //   <h2>동작 잘하나요?</h2>
  //   </div>
  // );

  // if 대신에 jsx에서 조건부 연산자 이용
  // const: 상수처럼 사용, 안드로이드 val
  // let: 변수처럼 사용, 안드로이드 var
  // const name = '이준석';
  // return (
  //   <div>{name == '이준석' ? <h1>이준석 맞음</h1> : <h1>이준석 아님</h1>}</div>
  // );

  //   화면에 아무것도 출력을 하지 않을 때, null 사용하면 됨.

  // && 2가지 조건이 참이 되어야 실행이 되는데,
  // 앞에 조건이 거짓이면, 뒤에 조건을 안봄.

  // const name = "이준석";
  // return <div>{name === "이준석" && <h1>이준석이 맞네</h1>}</div>;

  // truthy, falsy ,
  // 조건에서 false -> null 인식.
  // 주의사항,
  // 0은 예외적으로 화면에 나타냄.
  // const name = undefined;
  // return name || '값이 undefined입니다.';

  // 인라인 스타일링 기본

  // const style = {
  //   backgroundColor: 'skyblue',
  //   color: 'yellow',
  //   fontsize: '50px',
  // };
  // return (
  // <div style={style}>
  //   {name}

  // </div>
  // 바로 사용도 가능함.
  const name = '이준석';
  return (
    <div style={{ backgroundColor: 'blue', color: 'yellow', fontSize: '50px' }}>
      {name}
      <div className="reactTest">이준석2</div>
    </div>
  );
}

export default App;
