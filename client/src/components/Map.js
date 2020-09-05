import React, { useEffect, useState } from "react";
import axios from "axios";
import MapData from "./MapData";

const Map = () => {
  const [datas, setDatas] = useState([]);

  return <MapData datas={datas} />;
};
export default Map;
