// Main 임시 페이지 
import React from 'react';
// yarn add react-router-dom
// 라우팅 모듈, 도구 설치
import {useNavigate} from "react-router-dom"
import {Button} from "antd"


const Main = () => {
    // useNavigate 라는 훅스를 이용해서, 페이징 하기..
    const navigate = useNavigate();

    return (
        <div>
            <h1>메인화면 입니다.</h1>
            <Button
            title ="회원가입 이동"
            onClick={navigate("/Join")}
            />            
        </div>
    );
};

export default Main;