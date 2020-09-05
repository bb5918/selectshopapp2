import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button, Modal, Select } from "antd";
import { MenuOutlined, UserOutlined, DatabaseTwoTone } from "@ant-design/icons";
import "./styles.css";
import axios from "axios";

import Drawers from "./Drawers";
import UploadData from "./UploadData";
import MapData from "./MapData";
import Toggle from "./Filter/Toggle";
import { styles, area } from "./Filter/Datas";

export default function Navbar() {
  const [Filters, setFilters] = useState({
    styles: [],
    area: [],
  });
  const [datas, setDatas] = useState([]);
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
  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = (variables) => {
    axios.post("/api/data/getDatas", variables).then((response) => {
      console.log("axios");
      if (response.data.success) {
        setDatas(response.data.datas);
      } else {
        alert("데이터 로드 실패");
      }
    });
  };
  const showFilteredResults = (filters) => {
    const variables = {
      filters: filters,
    };
    getDatas(variables);
  };
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;

    console.log(newFilters);
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  console.log("data:", datas);
  const render = () =>
    datas.map((data, index) => {
      return <p>{data.name}</p>;
    });

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
          <div>
            <MapData datas={datas} />
          </div>
        </div>

        <Drawer
          placement="left"
          closable={false}
          onClose={onDrawerClose}
          visible={drawervisible}
        >
          <div>
            <Toggle
              list={styles}
              handleFilters={(filters) => handleFilters(filters, "styles")}
            />
            <br />
            <Toggle
              list={area}
              handleFilters={(filters) => handleFilters(filters, "area")}
            />
            {render()}
          </div>
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
