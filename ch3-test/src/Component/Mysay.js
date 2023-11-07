// 함수형 컴포넌트 템플릿 바로 생성 rsc

import React, { useState } from 'react';
// useState 로, 함수형 컴포넌트에서 상태값 변경 연습하기

const Mysay = () => {
    // 회원가입, userName 입력 받아서, username 확인하기
    // const [상태값, 세터함수] = useState('') -> 반환배열형식
    const [userName,setUserName] = useState("ljs")
    const [password,setPassword] = useState("1234")

    // 색깔 추가 해보기
    const [color, setColor] = useState("red")

    // 이벤트 핸들러 추가. onClick, 클릭시 이벤트 발생
    const onClickUsername = () => setUserName('username 더미값')
    const onClickPassword = () => setPassword('password 더미값')
    return (
        <div>
            <h1 style={{color}}>{userName}님 환영합니다.</h1>
            <h1>{userName}님 패스워드 확인 테스트: {password}</h1>

            <button onClick={onClickUsername}>userName 확인하기</button>
            <button onClick={onClickPassword}>password 확인하기</button>
            <br/>
            <button style={{color: "red"}} onClick={()=> setColor("red")}>
                빨간색꾸미기
            </button>
            <button style={{color: "blue"}} onClick={()=> setColor("blue")}>
                파란색꾸미기
            </button>
            <button style={{color: "green"}} onClick={()=> setColor("green")}>
                초록색꾸미기
            </button>
        </div>
    );
};

export default Mysay;