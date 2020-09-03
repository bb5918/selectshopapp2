import React, { useState } from "react";
import { Menu, Drawer, Button, Modal } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./styles.css";
import Drawers from "./Drawers";
import UploadData from "./UploadData";
export default function Navbar() {
  const [drawervisible, setDrawerVisible] = useState(false);
  const [modalvisible, setModalVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };
  const showModal = () => {
    setModalVisible(true);
  };
  const onModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          width: "100%",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "absolute", left: 0 }}>
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
            </div>

            <a href="/">Select Shop Map</a>
            <div
              style={{ position: "absolute", right: 0, marginRight: "80px" }}
            >
              <Button type="primary" onClick={showModal}>
                셀렉샵 추가
              </Button>
            </div>
            <div
              style={{ position: "absolute", right: 0, marginRight: "30px" }}
            >
              <Button type="primary">
                <UserOutlined />
              </Button>
            </div>
          </div>
        </div>

        <Drawer
          placement="left"
          closable={false}
          onClose={onDrawerClose}
          visible={drawervisible}
        >
          <Drawers />
        </Drawer>
        <Modal
          title="셀렉샵 추가"
          onCancel={onModalClose}
          onOK={onModalClose}
          visible={modalvisible}
        >
          <UploadData />
        </Modal>
      </nav>
    </>
  );
}
