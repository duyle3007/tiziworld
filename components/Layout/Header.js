import { Drawer, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

import client from "@/utils/contentfulClient";
import Img from "../Img";

import styles from "./Header.module.scss";
import { FileContext } from "./Layout";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { logo } = useContext(FileContext);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.header}>
      <MenuOutlined onClick={showDrawer} className="text-white text-2xl" />
      <Input
        placeholder="Nhập món ăn cần tìm..."
        suffix={<SearchOutlined />}
        //   onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Drawer
        placement={"left"}
        width={300}
        onClose={onClose}
        closeIcon={null}
        open={open}
        rootClassName={styles.drawerHeader}
      >
        <div className="flex justify-center">
          <Img url={logo} className={styles.logo} />
        </div>
        <div className={styles.drawerItem}>TRANG CHỦ</div>
        <div className={styles.drawerItem}>ĐỊA ĐIỂM - GIÁ VÉ</div>
        <div className={styles.drawerItem}>ĐẶT MÓN</div>
        <div className={styles.drawerItem}>ĐẶT TIỆC SINH NHẬT</div>
        <div className={styles.drawerItem}>TIN TỨC</div>
        <div className={styles.drawerItem}>TUYỂN DỤNG</div>
        <div className={styles.drawerItem}>VỀ TIZI KIDZPLAY COFFEE</div>
      </Drawer>
    </div>
  );
};

export default Header;
