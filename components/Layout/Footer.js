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
      <Collapse ghost items={items} expandIconPosition="end" />
      <div className="text-primary text-2xl font-bold uppercase font-[system-ui]">
        Hệ thống Tizi world đã có mặt tại TP. Hồ Chí Minh
      </div>
      <div className="text-primary mt-4">
        E1.31, 36 Đường Bờ Bao Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú Ho Chi
        Minh City, Vietnam
      </div>
      <div className="text-primary mt-1">Điện thoại: 089 882 86 28</div>
      <div className="flex gap-2 items-center mt-4">
        <img
          src="https://beponglap.vn/thumbs/43x43x3/upload/photo/icon-zalo-beponglap-7689.png"
          className="w-10 h-10"
        />
        <a
          target="_blank"
          href="https://www.facebook.com/TiziWorldKidsCafe"
          rel="noopener noreferrer"
        >
          <img
            src="https://beponglap.vn/thumbs/43x43x3/upload/photo/icon-fanpage-web-beponglap-6007.png"
            className="w-10 h-10"
          />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@tiziworldkidsplaycafe"
          rel="noopener noreferrer"
        >
          <img
            src="https://beponglap.vn/thumbs/43x43x3/upload/photo/icon-tiktok-web-beponglap-3419.png"
            className="w-10 h-10"
          />
        </a>
        {/* <FacebookOutlined onClick={() => window.open("tel:0898828628")} /> */}
      </div>
      <div class="text-primary mt-2 text-center">
        © Copyright <span>Tizi world Kids Cafe</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
