import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Test from "./Component/Test";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";
import Test33 from "./Component/Test33";
import MyComp from "./Component/MyComp";


// 부모 컴포넌트
function App() {
  return (
    <>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      <Test />
      <FuncTest1 />
      <ClassTest />
      <Test33/>
      {/* 자식 컴포넌트에게 props라는 속성 객체를 이용해서 이름 전달하기 */}
      {/* <MyComp name="이준석" password="1234"/> */}
      {/* <MyComp/> 부모 컴포넌트에서 props 지정안하면 자식에서 받을거 없음 */}
      <MyComp/>
    </>
  );
}

export default App;
