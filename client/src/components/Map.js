import React, { useEffect, useState } from "react";
import axios from "axios";
import MapData from "./MapData";

const Map = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("/api/data/getDatas").then((response) => {
      if (response.data.success) {
        console.log(response.data.datas);
        setDatas(response.data.datas);
      } else {
        alert("데이터 로드 실패");
      }
    });
  }, []);

  return <MapData datas={datas} />;
};
export default Map;
