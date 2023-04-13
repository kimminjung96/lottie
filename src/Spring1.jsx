import { animated, useSpring } from "@react-spring/web";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 26 },
  });

  return (
    <animated.div>
    {/*   {number.to((n) =>  n.toFixed(0)
      )} */}
      {number.to((n) => {
        return n.toFixed(0);
      })}
    </animated.div>
  );
}

const Spring = () => {
  return (
    <div style={{ fontSize: "5em" }}>
      <Number n={100} />
    </div>
  );
};

export default Spring;
