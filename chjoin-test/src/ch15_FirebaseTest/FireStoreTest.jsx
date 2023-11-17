import React from "react";
import { Button } from "antd";

// 스토어

// 준비작업 샘플 테스트1
// import
import { db } from "./firebaseConfig";

// 공식 문서 샘플코드 그대로 가져온 경우
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko#web-modular-api
import { doc, setDoc } from "firebase/firestore";
// 공식 문서 샘플코드 그대로 가져온 경우
// https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko
import { getDoc } from "firebase/firestore";

const FireStoreTest = () => {
  const testSetDoc = async () => {
    // db: 파이어베이스 스토어 의미, 이용하기 위한 초기값이 들어있는 인스턴스
    // cities : 컬렉션(테이블과 동일 역할)
    // LA : 문서의 아이디 부분, 보동은 자동 아이디로 가능
    // 문서 아이디는 pk 형식으로 되어야 함 -> 중복 허용 되지 않게 설계
    // 자바스크립트 객체 형태의 값이 추가 되었음
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  // 데이터 가져오기 샘플

  const getDoc = async () => {
    // db: 공통 도구
    // cities : 컬렉션에 있는
    // LA 문서를 가져올 예정 
    const docRef = doc(db, "cities", "LA");
    // docSnap 실제 데이터가 존재함, 객체 형태로
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <Button type="primary" onClick={() => testSetDoc()}>
        Test SetDoc
      </Button>
      &nbsp; &nbsp;
      <Button type="primary" onClick={() => getDoc()}>
        Test getDoc
      </Button>
    </div>
  );
};

// 샘플 테스트
// 간단히 입력값 2개정도 , username, password
// crud 확인
// 파이어 베이스 콘솔에 들어가서, 우리가 이용할 서비스 시작하고,
// 사용 규칙은 일단 테스트 모드(사용기간 30일 제한), 프로덕션 모드 (배포)
// 스토어, 스토리지 오픈

export default FireStoreTest;
