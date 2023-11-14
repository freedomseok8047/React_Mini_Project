import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../component/Categories';
import NewList from '../component/NewsList';

const NewsPage = () => {
  // 라우팅 경로(url) 뒤에
  const params = useParams();
  // 카테고리 기본값: all, 나머지는 선택된 카테고리 값으로 사용
  const category = params.category || "all";
  return (
    <div>
      {/* 기존에 MainNews 에서 전다하는 방식과 조금 다르다
      여기서는 NavLink */}
      <Categories/>
      <NewList category={category}/>
    </div>
  );
};

export default NewsPage;