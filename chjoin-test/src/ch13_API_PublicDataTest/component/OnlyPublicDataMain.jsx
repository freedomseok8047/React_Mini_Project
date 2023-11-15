import React,{createContext} from 'react';

const PublicDataContext = createContext({
  // state 속성으로 값으로
  state: { category: "all" },
  // actions 속성으로 함수로
  actions: {
    setCategory: (category) => {},
  },
});

const OnlyPublicDataMain = () => {
  
  return (
    <div>
      
    </div>
  );
};

export default OnlyPublicDataMain;