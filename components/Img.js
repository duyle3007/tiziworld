import { Image } from "antd";
import { useMemo } from "react";

const Img = ({ url, className }) => {
  const imgUrl = useMemo(() => {
    if (url?.length > 0) {
      return `https://${url.split("//")[1]}`;
    } else {
      return "";
    }
  }, [url]);

  return <Image className={className} src={imgUrl} preview={false} />;
};

export default Img;
