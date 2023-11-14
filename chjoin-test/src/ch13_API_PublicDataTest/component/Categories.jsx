import styled, { css } from "styled-components";

// 카테고리 목록, 보이는 건 한글, 값은 영어로 할당
const categories = [
  {name: "all", text: "전체보기"},
  {name: "business", text: "비즈니스"},
  {name: "entertainment", text: "엔터테인먼트"},
  {name: "health", text: "건강"},
  {name: "science", text: "과학"},
  {name: "sports", text: "스포츠"},
  {name: "technology", text: "기술"},
];

//css
const CategoriesBlockCss = styled.div`
display: flex;
padding: 1rem;
width: 768px;
margin: 0 auto;
@media screen and (max-width: 768px) {
  width: 100%;
  overflow-x: auto;
}
`;

const CategoriesCss = styled.div`
font-size: 1.5rem;
font-family: "Orbit";
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.5rem;
margin-right: 1rem;


&:hover {
  color: red;
}

// active 클래스 속성 추가
${props =>
props.active&& css`
font-weight: 600;
border-bottom: 2px solid red;
color: aqua;
&:hover{
  color: green;
}

`}
`;


const Categories = ({category,onSelect}) => {
  return(
    <CategoriesBlockCss>
      {categories.map((c) => (
        <CategoriesCss
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
          >
          {c.text}
        </CategoriesCss>
      ))}
    </CategoriesBlockCss>
  )
}

export default Categories;