import React from 'react';

// 스토리지 공식 문서 , 샘플코드 그대로 복사
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from './firebaseConfig';
// const storage = getStorage();
// storage: 파이어베이스 스토리지ㅔ 접근하기 위한 도구, 포인터, 인스턴스
// 스토리지 저장소에, 특정 경로를 만들기
// reactStorage/
const storageRef = ref(storage, 'some-child');




// 파일 선택하는 input, 보여주기
const FireStorageTest = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const storageRef = ref(storage, 'reactStorage/');
    // 'file' comes from the Blob or File API
    const files = event.target.files;
    const thisFile = files[0]
    uploadBytes(storageRef, thisFile).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='file' accept='image/*'/>
        <input type='submit' value='Upload'/>
      </form>
    </div>
  );
};

export default FireStorageTest;