import { Fragment } from "react";
import Marquee from "react-fast-marquee";

const FastMarquee = () => {
  const items = Array.from({ length: 20 }, (_, index) => (
    <Fragment key={index}>
      <img
        src={"/images/saleIcon.png"}
        alt="sale"
        className="h-full w-8 mr-2 ml-4"
      />
      TIN TỨC MỚI CẬP NHẬT
      <img
        src={"/images/saleIcon.png"}
        alt="notice"
        className="h-full w-8 mr-2 ml-4"
      />
      TIN TỨC MỚI CẬP NHẬT
    </Fragment>
  ));

  return (
    <Marquee
      className="text-2xl bg-primary2 flex justify-center py-2 mt-8"
      autoFill
      direction="right"
      speed={80}
    >
      {items}
    </Marquee>
  );
};

export default FastMarquee;
