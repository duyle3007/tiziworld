import { useContext, useEffect, useState } from "react";
import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";
import Img from "./Img";
import Slider from "react-slick";
import Slogan from "./Slogan.server";

import styles from "./AllShopDetail.module.scss";

const FoodItem = ({ food }) => {
  return (
    <div
      className="bg-primary2 flex flex-col gap-4 h-70 pb-4 rounded-xl"
      onClick={() => window.open(food.fields.linkOrder, "_blank")}
    >
      <Img
        url={food.fields.image.fields.file.url}
        className="w-full h-36 rounded-tl-xl rounded-tr-xl"
      />
      <div className={styles.foodName}>{food.fields.name}</div>
      <div className="font-bold">XEM THÊM</div>
    </div>
  );
};

const AllShopDetail = () => {
  const { background } = useContext(FileContext);
  const [listFood, setListFood] = useState([]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: window.screen.width >= 1280 ? 4 : 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  useEffect(() => {
    client
      .getEntries({ content_type: "product" })
      .then((response) => {
        setListFood(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`flex px-2 pt-10 flex-col text-center ${styles.allShopDetail}`}
    >
      <div className="uppercase text-2xl text-[#fcd9b0] font-bold mb-4">
        BÁN CHẠY NHẤT HỆ THỐNG
      </div>
      <Slider {...settings}>
        {listFood.map((food, foodIndex) => (
          <FoodItem key={foodIndex} food={food} />
        ))}
      </Slider>

      <Slogan />
    </div>
  );
};

export default AllShopDetail;
