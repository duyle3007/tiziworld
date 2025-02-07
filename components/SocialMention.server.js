import { useContext } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import { FileContext } from "./Layout/Layout";

const SocialMention = () => {
  const { background } = useContext(FileContext);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="flex px-2 pb-10 pt-6 flex-col "
    >
      <div className="flex flex-col bg-[#3e0c0c] p-10 rounded-xl text-[#fcd9b0] gap-4 mt-4 text-center border-primary2 border border-solid">
        <div className="uppercase text-2xl">
          Mạng xã hội, truyền thông nói gì về Tizi world
        </div>
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

export default SocialMention;
