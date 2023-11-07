import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Test from "./Component/Test";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";
import Test33 from "./Component/Test33";


// 부모 컴포넌트
function App() {
  return (
    <>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      <Test />
      <FuncTest1 />
      <ClassTest />
      <Test33/>
    </>
  );
}

export default App;
