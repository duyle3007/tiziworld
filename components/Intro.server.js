import { useContext, useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";

const convertYoutubeLink = (link) => {
  let videoId;
  if (link.includes("v=")) {
    videoId = link.split("v=")[1];
  } else {
    videoId = link.split("shorts/")[1];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1`;
};

const Intro = () => {
  const { background } = useContext(FileContext);
  const [introInfo, setIntroInfo] = useState({});

  useEffect(() => {
    client
      .getEntries({ content_type: "intro" })
      .then((response) => {
        setIntroInfo(response.items[0].fields);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="flex px-2 py-10 flex-col items-center lg:flex-row"
    >
      <video
        className="w-full h-[400px] rounded-xl"
        controls
        autoPlay
        muted
        loop
      >
        {introInfo?.clipUrl && (
          <source src={introInfo?.clipUrl} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>
      {/* {introInfo?.clipUrl && (
        <iframe
          id="myIframe"
          className="w-full rounded-xl h-60"
          src={convertYoutubeLink(introInfo.clipUrl)}
          frameborder="0"
          allowfullscreen
        ></iframe>
      )} */}

      <div className="flex flex-col bg-[#3e0c0c] p-10 rounded-xl text-[#fcd9b0] gap-4 mt-4 text-center border-primary2 border border-solid">
        <div className="uppercase text-2xl">{introInfo.title}</div>
        <div className="whitespace-break-spaces">{introInfo.description}</div>
        <div className="flex rounded-3xl bg-[#9a6d59] w-fit self-center mt-4 pl-2">
          <div className="text-white p-3 mr-2">XEM THÊM</div>
          <div className="p-2 bg-primary2 rounded-3xl w-11 flex justify-center items-center">
            <ArrowRightOutlined className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

async function fetchDataFromServer() {
  // Normally, you’d call an API or a database here
  return "Server-side data fetched successfully";
}
