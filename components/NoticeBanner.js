import { useEffect, useState } from "react";
import { Carousel } from "antd";

import Img from "./Img";
import client from "@/utils/contentfulClient";

import styles from "./NoticeBanner.module.scss";

const NoticeBanner = () => {
  const [listBanner, setListBanner] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "notice" })
      .then((response) => {
        setListBanner(response.items[0].fields.images);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.noticeBanner}>
      <Carousel autoplay dots={null}>
        {listBanner.map((banner) => (
          <Img
            key={banner.fields.file.url}
            url={banner.fields.file.url}
            className={styles.bannerItem}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default NoticeBanner;
