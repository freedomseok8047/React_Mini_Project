import "./App.css";
import React, { useEffect, useState,useRef } from "react";

import Controller from "./useEffectPractice/Controller";
import Viewer from "./useEffectPractice/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const didMountRef = useRef(false);

  // useEffect(() => {
  //   console.log("count or text 업데이트: ", count,text);
  // }, [count,text]);

  // 컴포넌트가 업데이트 될때만 실행
  useEffect(() => {

    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }else {
    console.log("컴포넌트 업데이트!",count,text);
    }
  },[count,text]);

  // 컴포넌트가 마운트 될때만 실행
  useEffect(() => {
    console.log("Component Mounted!");
  },[]);

  // 질문?
  // 가설: 최초 실행했을 때 마운트만되고 업데이트 발생X
  // ->  console.log("Component Mounted!"); 만 실행되어야 함 

  // 실제 결과 : 
  // Component Mounted! -> console.log("Component Mounted!");
  // 컴포넌트 업데이트! -> console.log("컴포넌트 업데이트!");
  // Component Mounted! -> console.log("Component Mounted!");

  // 결론 : 최초 실행시 제어하지 못한 업데이트 발생! -> 리랜더링 -> 리마운트

  // 하여, console.log("컴포넌트 업데이트!",count,text); 찍어보니
  // count : 0 -> 최초 실행인데 왜 업데이트 발생??

  // 해결 -> index.js에 <React.StrictMode> 제거 -> 문법 검사 제거 -> 마운트 한번 만 실행 됨!

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
