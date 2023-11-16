import React, { useState, useCallback } from "react";
import Categories2 from "./Categories2";
import PublicDataList from "./PublicDataList";

const OnlyPublicDataMain = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      <Categories2 category={category} onSelect={onSelect}/>
      <PublicDataList category={category}/>
    </div>
  );
};
export default OnlyPublicDataMain;
