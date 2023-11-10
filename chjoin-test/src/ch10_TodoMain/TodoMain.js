// 현재
// 부모 : App.js
// 자식 : TodoMain.js
// 1) 제목 2) 입력란 3)리스트 4)리스트의 아이템
import React from "react";
import styled from "styled-components";

import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import TodoBase from "./TodoBase";
import TodoInsert from "./TodoInsert";

const Main_css = styled.div`
  margin: 0;
  padding: 0;
  font-size: 30px;
  font-family: "Orbit", sans-serif;
  // 회색, 배경은 본인 취향
  background: #3c4656;
  color: white;
`;

const TodoMain = () => {
  return (
    <div>
      <Main_css>
        <AiFillApple />
        만들기 준비 메인
        <TodoBase>
          <TodoInsert />
        </TodoBase>
      </Main_css>
    </div>
  );
};

export default TodoMain;
