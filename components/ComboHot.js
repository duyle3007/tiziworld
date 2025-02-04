import { useContext, useEffect, useState } from "react";
import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";
import Img from "./Img";
import Slider from "react-slick";

import styles from "./AllShopDetail.module.scss";
import SocialMention from "./SocialMention";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const FoodItem = ({ food }) => {
  return (
    <div className="bg-primary2 flex flex-col gap-4 h-70 pb-4 rounded-xl">
      <Img
        url={food.fields.image.fields.file.url}
        className="w-full h-36 rounded-tl-xl rounded-tr-xl"
      />
      <div className={styles.foodName}>{food.fields.name}</div>
      <div className="font-bold">XEM THÊM</div>
    </div>
  );
};

const ComboHot = () => {
  const { background } = useContext(FileContext);
  const [listFood, setListFood] = useState([]);

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
      <Slider {...settings}>
        {listFood.map((food, foodIndex) => (
          <FoodItem key={foodIndex} food={food} />
        ))}
      </Slider>
      <div className="flex rounded-3xl bg-[#9a6d59] w-fit self-center mt-10 pl-2">
        <div className="text-white p-3 mr-2">XEM THÊM</div>
      </div>
      <SocialMention />
    </div>
  );
};

export default ComboHot;
