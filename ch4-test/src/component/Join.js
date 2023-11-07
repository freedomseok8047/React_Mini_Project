//회원가입 창 처럼 만들기.
import React from "react";
import { useState } from "react";

const Join = () => {
  // 방법1
  // useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// 방법2
// 특정 객체에 담아서(박스(모델)에 담아서)
// 초깃값으로 객체를 선언 했음
// form 상태값에 ,객체가 할당이 됨
// 방법1과 비교하면, 방법1은 개별적으로 처리했고
// 방법2는 객체에 담아서 일괄 처리 
const [form, setForm] = useState({
    email : "",
    password : ""
})

// 비구조화 할당으로
const {email,password} = form

  // onChange, onClick , onKeyPress 등 확인.
  // input 입력된 값의 변경 유무를 확인.
  // 방법1
  //  const onChangeEmail = (e) => setEmail(e.target.value);

  // 방법2 form 내부 값 변경시 처리하는 로직
  const onChangeForm = e => {
    const nextForm = {
        ...form,
        // email, input -> name : email, value : 실제 입력된 값 
        // password, input -> name : password, value : 실제 입력된 값 
        [e.target.name] : e.target.value
    }
    setForm(nextForm)
  }

  // 추가 패스워드 변경 부분 , 해당 뷰에 나타내기 테스트 -> 나중에 데이터 전달
  // 통신 라이브러리 사용함, axios 사용할 예정. 파이어 베이스도 연동
  // 방법 1 
//   const onChagePassword = (e) => setPassword(e.target.value)

  // 클릭 이벤트 발생시 값을 확인.
  // 방법1
//   const onClick = () => {
//     alert("email: " + email + ", password : " + password);
//     setEmail("");
//     setPassword("")
//   };

// 방법2 . form 객체에 담아서 일괄 처리 하는 중 
const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
        email: "",
        password: "",
    })
}

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 확인 중. </h1>
      <h2>이메일 : {email}</h2>
      <h2>패스워드 : {password}</h2>
      <input
        type="text"
        name="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        // 방법 1
        // onChange={onChangeEmail}
        // 방법 2
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br/>
      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
         // 방법 1
        // onChange={onChagePassword}
        // 방법 2
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Join;