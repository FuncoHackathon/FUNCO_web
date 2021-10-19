import React, { useEffect, useState } from "react";

const AdBanner = () => {
  const [img, setImg] = useState(1);
  const [display, setDisplay] = useState("none");

  const imgChangeLeft = () => {
    if (img > 3) {
      setImg(1);
    } else {
      setImg(img + 1);
    }
  };

  const imgChangeRight = () => {
    setImg(4);
    if (img <= 1) {
      setImg(4);
    } else {
      setImg(img - 1);
    }
  };

  const buttonDisplayOn = () => {
    setDisplay("block");
  };

  const buttonDisplayOff = () => {
    setDisplay("none");
  };

  // componentDidMount() {
  //   setInterval(this.imgChangeLeft, 5000);
  // }

  useEffect(() => {
    setInterval(imgChangeLeft, 5000);
  }, []);

  return (
    <div>
      <div
        className="mainBanner"
        onPointerOver={buttonDisplayOn}
        onPointerOut={buttonDisplayOff}
      >
        <botton
          className="leftArrow"
          onClick={imgChangeLeft}
          style={{ display: display }}
        >
          <i class="fas fa-chevron-left"></i>
        </botton>
        <img src={require(`../img/${img}.png`).default} alt="배너이미지" />
        <botton
          className="rightArrow"
          onClick={imgChangeRight}
          style={{ display: display }}
        >
          <i class="fas fa-chevron-right"></i>
        </botton>
      </div>
    </div>
  );
};
export default AdBanner;
