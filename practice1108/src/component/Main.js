// Main 임시 페이지
import React from "react";
// yarn add react-router-dom
// npm install react-router-dom
// 라우팅 모듈 , 도구 설치.
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

// styled-component,  컴포넌트에서 좀더 편하게 css  작업하는 모듈.
// yarn add styled-components
// npm install styled-components
// 확장팩: styled-components
// 설치 후, 모듈 가져와서 사용하기.
// 공식 문서
// https://styled-components.com/docs/basics#getting-started
import styled from "styled-components";

// styled-component 사용해보기 
// 예제
// styled.원하는 테그 선택 `` 백틱 열고 닫고
const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`
const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  background-color: aqua;
  text-align: center;
`
// Wrapper 라고 해서 블록 부분 설정
const Wrapper = styled.div`
padding:20px;
width: calc(100% - 40px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: conter;
`;

// Container 만들기
const Container = styled.div`
width: 100%;
max-width: 720px;
margin-left: 20px;

// & : 현재태그
// div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고 
// 각 요소의 마진 바텀을 16px 씩 주겟다
& {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  // useNavigate 라는 훅스를 이용해서, 페이징 하기..
  const navigate = useNavigate();

  return (
    <Wrapper>
    <div>
      <h1>메인 화면입니다.</h1>
      {/* CSS 적용하기 */}
      <Container>
      <MainTitleTextCss>styled-components test</MainTitleTextCss>
      {/* 2번째 텍스트 효과 확인하기 */}
      <MainTextCss>2번째 텍스트 효과 확인하기</MainTextCss>
      
      {/* join 컴포넌트로 이동하는 버튼 하나 추가 */}
      <Button title="회원가입 이동" onClick={()=> {navigate("/Join")}} type="primary">
      회원가입</Button>

    <br/>
    <br/>
    <Button title="로그인 이동 " onClick={()=> {navigate("/Login")}} type="primary">
    로그인 이동</Button>

    <br/>
    <br/>
    <Button title="연습페이지 이동 " onClick={()=> {navigate("/Practice")}} type="primary">
    연습페이지 이동</Button>


      </Container>
    </div>
   
    </Wrapper>
  );
};

export default Main;