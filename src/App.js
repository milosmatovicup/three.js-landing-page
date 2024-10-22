import React, { useRef } from "react";

import Model from "./components/Model";
import OverLay from "./components/OverLay";


function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <>
      <Model scroll={scroll}/>
      <OverLay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}

export default App;
