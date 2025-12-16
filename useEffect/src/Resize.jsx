import { useEffect, useState } from "react";

const Resize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // <- dependency array

  return (
    <>
      <p>window width: {width}</p>
    </>
  );
};

export default Resize;
