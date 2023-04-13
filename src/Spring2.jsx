import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";
import "./spring.css";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 26 },
  });

  return (
    <animated.div>
      {number.to((n) => {
        return n.toFixed(0);
      })}
    </animated.div>
  );
}

const Spring = () => {
  const numberRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      /* 스크롤바 핸들의 상단 좌표값 알아내기 currentPosition */
      // console.log(window.pageYOffset + window.innerHeight);
      const currentPosition = window.pageYOffset + window.innerHeight;

      /* 애니메이트 대상 좌표값 targetPosition */
      /* Number가 아니라 useRef가 쓰인 numverRef의 탑값을 가져와야한다. */
      const targetPosition = numberRef.current.offsetTop + numberRef.current.offsetHeight / 2;
      // console.log(numberRef.current.offsetTop); //current란 값에 들어있음
      /* 스크롤값이 빠르기 때문에 임의의 값을 빼준다. */
      // console.log(numberRef.current.offsetHeight / 2); //current란 값에 들어있음

      if (!isAnimated && currentPosition >= targetPosition) {
        setIsAnimated(true);
      }
    };
    //스크롤값은 화면마지막까지 값이 안나와서 화면값을 더한다.
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="section"></div>
      <h1 ref={numberRef}>{isAnimated && <Number n={100} />}</h1>
    </div>
  );
};

export default Spring;
