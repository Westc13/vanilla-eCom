import React from "react";
import data from "./components/back/data/Data";
import Header from "./components/front/header/Header";
const App = () => {
  const { productItems } = data;
  return (
    <div>
      <Header />
    </div>
  );
};
export default App;
