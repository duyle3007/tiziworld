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
        <div className={styles.drawerItem}>GIỚI THIỆU</div>
        <div className={styles.drawerItem}>XEM MENU</div>
        <div className={styles.drawerItem}>ĐẶT MÓN</div>
        <div className={styles.drawerItem}>ĐẶT BÀN</div>
        <div className={styles.drawerItem}>BẢNG TIN</div>
        <div className={styles.drawerItem}>LIÊN HỆ</div>
        <div className={styles.drawerItem}>NHƯỢNG QUYỀN</div>
      </Drawer>
    </div>
  );
};

export default Header;
