import { useContext, useEffect, useState } from "react";

import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";

const Intro = () => {
  const { background } = useContext(FileContext);
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    client
      .getEntries({ content_type: "videoIntro" })
      .then((response) => {
        setVideoUrl(response.items[0].fields.url);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="flex px-2 py-10"
    >
      <video className="w-full" controls autoPlay muted loop>
        {videoUrl && <source src={videoUrl} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      {/* <div className="bg-[##3e0c0c] p-10 rounded-xl"></div> */}
    </div>
  );
};

export default Intro;
