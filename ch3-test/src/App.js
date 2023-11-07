import logo from "./logo.svg";
import "./App.css";
import React, { Fragment } from "react";
import Test from "./Component/Test";
import FuncTest1 from "./Component/FuncTest1";
import ClassTest from "./Component/ClassTest";
import Test33 from "./Component/Test33";
import MyComp from "./Component/MyComp";
import MyCompPublicFunction from "./Component/MyCompPublicFunction";
import Count from "./Component/Count";
import MyCount from "./Component/MyCount";
import Mysay from "./Component/Mysay";

// 부모 컴포넌트
function App() {
  return (
    <>
      {/* 자식 컴포넌트 출력 해보기 테스트 */}
      {/* <Test />
      <FuncTest1 />
      <ClassTest />
      <Test33/> */}
      {/* 자식 컴포넌트에게 props라는 속성 객체를 이용해서 이름 전달하기 */}
      {/* <MyComp name="이준석" password="1234"/> */}


      {/* <MyComp/> 부모 컴포넌트에서 props 지정안하면 자식에서 받을거 없음 */}
      {/* but! props기본값(null값일 때) 설정해주면 기본값 설정가능 */}
      {/* <MyComp/> */}

      {/* 자식 컴포넌트에게 children라는 속성으로 전달하기 */}
      {/* <MyComp name="이준석" password="1234"> 
      여기가 children속성이다.</MyComp> */}

      {/* props 타입 확인하기 */}
      <MyComp name = "이준석" password="12345678"> 
      이준석 어린이
      </MyComp>
      <h2>------------------------------------------------------------------------------------------</h2>
      {/* 클래스형 컴포넌트 버전으로 확인하기  */}
      <MyCompPublicFunction name = "이준석" password="12345678"> 
      이준석 어린이
      </MyCompPublicFunction>

      <h2>------------------------------------------------------------------------------------------</h2>
      {/* 클래스형 컴포넌트 */}

      <Count></Count>

      <h2>------------------------------------------------------------------------------------------</h2>
      
      {/* 함수형 컴포넌트 */}

      <MyCount/>

      <h2>------------------------------------------------------------------------------------------</h2>
      {/* 함수형 컴포넌트 간단 클릭 테스트 */}
      <Mysay/>


    </>
  );
}

export default App;
