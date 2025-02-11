import { Collapse } from "antd";

import styles from "./Footer.module.scss";

const items = [
  {
    key: "1",
    label: (
      <div className="text-primary text-2xl font-bold uppercase">
        Về Tizi world
      </div>
    ),
    children: <p className="text-primary">Giới thiệu hệ thống</p>,
  },
  {
    key: "2",
    label: (
      <div className="text-primary text-2xl font-bold uppercase">
        Chính sách chung
      </div>
    ),
    children: <p className="text-primary">Chính sách đổi trả</p>,
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <Collapse ghost items={items} expandIconPosition="end" /> */}
      <div className=" text-2xl font-bold uppercase ">
        Công ty cổ phần thực phẩm TIZI
      </div>
      <div className=" mt-4">
        E1.31, 36 Đường Bờ Bao Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú Ho Chi
        Minh City, Vietnam
      </div>
      <div className=" mt-1">Điện thoại: 089 882 86 28</div>
      <div className="flex gap-4 items-center mt-4">
        <img
          src={"images/zaloIcon.png"}
          className={styles.socialIcon}
          onClick={() => window.open("tel:0898828628")}
        />
        <a
          target="_blank"
          href="https://www.facebook.com/TiziWorldKidsCafe"
          rel="noopener noreferrer"
        >
          <img src={"images/fbIcon.png"} className={styles.socialIcon} />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@tiziworldkidsplaycafe"
          rel="noopener noreferrer"
        >
          <img src={"images/tiktokIcon.png"} className={styles.socialIcon} />
        </a>
        {/* <FacebookOutlined onClick={() => window.open("tel:0898828628")} /> */}
      </div>
      <div class="mb-6 mt-2 text-center">
        © Copyright <span>Tizi world Kids Cafe</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
