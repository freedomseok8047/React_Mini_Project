import React from 'react';

// 자식 컴포넌트
// 부모 컴포넌트로 부터 전달 받은 props라는 속성을 이용
const MyComp = (props) => {
    return (
        <div>
           <h1>
            테스트 props 객체 안에 속성들 중에서 name 받아오기 , {props.name} 
           </h1>

           <h1>
            테스트 props 객체 안에 속성들 중에서 password 받아오기 , {props.password} 
           </h1>
        </div>
    );
};

// 타입의 기본값 정하기
MyComp.defaultProps ={
    name : "기본 이름",
    password : "기본 1234"
}



export default MyComp;