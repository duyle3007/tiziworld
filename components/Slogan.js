import { useContext, useEffect, useState } from "react";
import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";
import Img from "./Img";

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
      className={`flex px-2 py-10 flex-col text-center `}
    >
      <div className="uppercase text-2xl text-[#fcd9b0] font-bold mb-4">
        {sloganData.title}
      </div>
      <div className="uppercase text-2xl text-[#fcd9b0] font-bold mb-4">
        {sloganData.description}
      </div>
      <div className="">
        {sloganData.image?.map((img) => (
          <Img url={img.fields.file.url} />
        ))}
      </div>
    </div>
  );
};

export default Slogan;
