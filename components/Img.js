import { useMemo } from "react";

const Img = ({ url, className }) => {
  const imgUrl = useMemo(() => {
    if (url?.length > 0) {
      return `https://${url.split("//")[1]}`;
    } else {
      return "";
    }
  }, [url]);

  return <img className={className} src={imgUrl} />;
};

export default Img;
