import React, { Suspense, useEffect, useRef, useState } from "react";

import Model from "./components/Model";
import OverLay from "./components/OverLay";
import { PulseLoader } from "react-spinners";


function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

    const handleLoading = (value) => {
      if (value) {
        setIsLoading(false);
      }
    }

    useEffect(() => {
      console.log('isLoading', isLoading)
    }, [isLoading])
    
  return (
    <>
      <div>
        {isLoading &&
          <div className="w-full h-[100vh] bg-primary">
            <PulseLoader />
          </div>
        }
        <Model scroll={scroll} handleLoading={handleLoading}/>
          {!isLoading && <OverLay ref={overlay} caption={caption} scroll={scroll}/>}
      </div>
    </>
  )
}

export default App;
