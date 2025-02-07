import { useContext, useEffect, useState } from "react";
import { FileContext } from "./Layout/Layout";
import client from "@/utils/contentfulClient";
import Img from "./Img";
import Slider from "react-slick";

import styles from "./CustomerFeedback.module.scss";
import FastMarquee from "./FastMarquee";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  dots: true,
  centerPadding: "60px",
  slidesToShow: 1,
  arrows: false,
  speed: 500,
};

const Feedback = ({ customer }) => {
  return (
    <div className="flex flex-col gap-6 h-70 pb-4">
      <div className={styles.feedbackContent}>
        <div className={styles.customerName}>{customer.fields.customer}</div>
        <div className={styles.feedback}>{customer.fields.feedback}</div>
      </div>
      <Img
        url={customer.fields.image.fields.file.url}
        className="w-full h-36 rounded-xl"
      />
    </div>
  );
};

const CustomerFeedback = () => {
  const { background } = useContext(FileContext);
  const [listCustomerFeedback, setListCustomerFeedback] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "customerFeedback" })
      .then((response) => {
        setListCustomerFeedback(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`flex px-2 pt-10 flex-col text-center ${styles.customerFeedback}`}
    >
      <div className="uppercase text-2xl text-[#fcd9b0] font-bold mb-4">
        Đánh giá từ khách hàng
      </div>
      <Slider {...settings}>
        {listCustomerFeedback.map((customer, customerIndex) => (
          <Feedback key={customerIndex} customer={customer} />
        ))}
      </Slider>
      <FastMarquee />
    </div>
  );
};

export default CustomerFeedback;
