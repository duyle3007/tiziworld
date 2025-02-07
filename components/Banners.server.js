import { useContext, useEffect, useState } from "react";
import { Carousel } from "antd";

import Img from "./Img";
import client from "@/utils/contentfulClient";
import { FileContext } from "./Layout/Layout";

import styles from "./Banners.module.scss";

const Banners = () => {
  const [listBanner, setListBanner] = useState([]);
  const { logo } = useContext(FileContext);

  useEffect(() => {
    client
      .getEntries({ content_type: "banner" })
      .then((response) => {
        setListBanner(response.items[0].fields.image);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.banners}>
      <Carousel autoplay dots={null}>
        {listBanner.map((banner) => (
          <Img
            key={banner.fields.file.url}
            url={banner.fields.file.url}
            className={styles.bannerItem}
          />
        ))}
      </Carousel>
      <Img url={logo} className={styles.logoBanner} />
    </div>
  );
};

export default Banners;
