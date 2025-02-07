import { useContext, useEffect, useState } from "react";
import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";
import Img from "./Img";

import styles from './Slogan.module.scss'

const Slogan = () => {
  const { background } = useContext(FileContext);
  const [sloganData, setSloganData] = useState({});

  useEffect(() => {
    client
      .getEntries({ content_type: "slogan" })
      .then((response) => {
        setSloganData(response.items[0].fields);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`flex px-2 py-10 flex-col text-center mt-8 ${styles.slogan}`}
    >
      <div className="uppercase text-2xl text-[#fcd9b0] font-bold">
        {sloganData.title}
      </div>
      <div className=" text-[#fcd9b0] mx-2 my-8 text-justify leading-6">
        {sloganData.description}
      </div>
      <div className={styles.listBanner}>
        {sloganData.image?.map((img) => (
          <Img key={img.fields.file.url} url={img.fields.file.url} className={styles.imgBanner}/>
        ))}
      </div>
    </div>
  );
};

export default Slogan;
