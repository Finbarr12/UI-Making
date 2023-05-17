import React from "react";
import { BlogList, Hero, Last, Marketing, Popular } from "./Components";

const App = () => {
  return (
    <div>
      <Hero />
      <BlogList />
      <Popular />
      <Marketing />
      <Last />
    </div>
  );
};

export default App;
