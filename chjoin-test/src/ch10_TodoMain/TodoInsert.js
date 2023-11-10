import { Button } from "antd";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

// 아이콘 가지고 올 이름
// io IoMdAddCircleOutline
// css
// 1.FormCss
// 2. FormInputCss
// 3. FormButtonCss
const FormCss = styled.form`
  display: flex;
  background: white;
`;
const FormInputCss = styled.input`
  background: #dfe5ef;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    font-family: "Orbit", sans-serif;
    color: gray;
  }
  flex: 1;
`;
const FormButtonCss = styled.button`
  outline: none;
  border: none;
  background: #bdc5d2;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #8992a0;
  }
`;

const TodoInsert = () => {
  return (
    <FormCss>
      <FormInputCss placeholder="Todo 입력해주세요" />
      <FormButtonCss type="primary">
        <IoMdAddCircleOutline />
      </FormButtonCss>
    </FormCss>
  );
};

export default TodoInsert;
