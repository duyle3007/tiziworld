import client from "@/utils/contentfulClient";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import styles from "./YoutubeRecommend.module.scss";

const YoutubeRecommend = () => {
  const [listYoutubeRecommend, setListYoutubeRecommend] = useState([]);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  useEffect(() => {
    client
      .getEntries({ content_type: "youtubeRecommend" })
      .then((response) => {
        setListYoutubeRecommend(response.items);
      })
      .catch(console.error);
  }, []);

  const getYoutubeId = (youtubeLink) => {
    console.log("youtubeLink", youtubeLink);
    return youtubeLink.split("embed/")[1];
  };

  return (
    <div className={styles.youtubeRecommend}>
      <Slider
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        arrows={false}
      >
        {listYoutubeRecommend.map((youtubeLink) => (
          <iframe
            key={youtubeLink.fields.link}
            src={youtubeLink.fields.link}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            height="370"
          />
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        dots
        arrows={false}
        className="mt-4"
      >
        {listYoutubeRecommend.map((youtubeLink) => (
          <img
            src={`https://img.youtube.com/vi/${getYoutubeId(
              youtubeLink.fields.link
            )}/0.jpg`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default YoutubeRecommend;
