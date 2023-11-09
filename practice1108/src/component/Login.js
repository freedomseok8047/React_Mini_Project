import { useState,React,useRef } from "react";
import { Avatar, Button,Input, Space } from "antd";
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


const Login = () => {
    // 방법1
  //useState 이용해서, 현재 상태값 , 세터 함수 정의하기.
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //방법2  , 특정 객체에 담아서(박스(모델)에 담아서)
  // 초깃값으로 객체를 선언 했음.
  // form 상태값에, 객체가 할당이 됨.
  // 앞에 부분과 비교하면, 앞에 개별적으로 처리했고, 객체에 담아서 일괄처리.
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 비구조화 할당으로
  const { email, password } = form;

  // onChange, onClick , onKeyPress 등 확인.
  // input 입력된 값의 변경 유무를 확인.
  // 방법1
  // const onChangeEmail = (e) => setEmail(e.target.value);

  // 방법2 , form 내부에 값이 변경시 처리하는 로직.
  const onChangeForm = (e) => {
    const nextForm = {
      ...form,
      // email input -> name : email , value : 실제 입력된 값
      // password input -> name : password , value : 실제 입력된 값
      [e.target.name]: e.target.value,
    };
    // 입력된 email, password  업데이트 해주는 함수 : 세터와 동일.
    setForm(nextForm);
  };

  // 추가 패스워드 변경 부분, 해당 뷰에 나타내기 테스트. -> 나중에 데이터 전달
  // 통신 라이브러리 사용함, axios 사용할 예정. 파이어베이스를 연동부분. 할예정.
  // 방법1
  // const onChangePassword = (e) => setPassword(e.target.value);

  // 클릭 이벤트 발생시 값을 확인.
  // 방법1
  // const onClick = () => {
  //   alert("email: " + email + ", password : " + password);
  //   setEmail("");
  //   setPassword("");
  // };

  // 방법2. form 객체에 담아서 일괄 처리. 하는중.
  const onClick = () => {
    alert("email: " + email + ", password : " + password);
    setForm({
      email: "",
      password: "",
    });
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
    return (
        <Wrapper>
        <div>
        <MainTitleTextCss>로그인 화면입니다.</MainTitleTextCss>
            <Container>
            <input
        type="text"
        name="email"
        placeholder="이메일 입력해주세요."
        value={email}
        // 방법1
        // onChange={onChangeEmail}
        // 방법2
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br />
      <Input.Password placeholder="패스워드를 입력해주세요." />
      <input
        type="text"
        name="password"
        placeholder="패스워드를 입력해주세요."
        value={password}
        // 방법1
        // onChange={onChangePassword}
        // 방법2
        onChange={onChangeForm}
        onKeyPress={onKeyPress}
      />
      <br />
      <Button onClick={onClick} type="primary">
        회원가입
      </Button>
      </Container>
        </div>
    </Wrapper>
    );
};

export default Login;