import React from "react";
import lottie from "lottie-web";
import lottieAni from "./dogAni.json";
import logo from "./logo.svg";

const Lottie = () => {
  const dog = React.useRef();
  React.useEffect(() => {
    lottie.loadAnimation({
      container: dog.current, //어떤돔요소에 넣을지
      animationData: lottieAni, //어디에 있는지
      loop: true,
      aytoplay: true,
    });
  }, []);

  return (
    <>
      <div ref={dog} style={{ width: 250, height: 250, position: "relative" }}>
        <span style={{ position: "absolute" }}>
          <img src={logo} alt="" style={{width:100,height:100}} />
        </span>
      </div>
    </>
  );
};

export default Lottie;
