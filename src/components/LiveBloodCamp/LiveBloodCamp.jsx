import React from "react";
import Typewriter from "typewriter-effect";

const LiveBloodCamp = () => {
  return (
    <>
      <h6 className="xxxxlarge text-center text-white  mb-4">
        <Typewriter
          options={{
            strings: ["Searching Blood Camps?", "Save life?"],

            autoStart: true,
            loop: true,
          }}
        />
      </h6>

      
    </>
  );
};

export default LiveBloodCamp;
