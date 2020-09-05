import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Select, Button } from "antd";
import Toggle from "./Filter/Toggle";
import { styles, area } from "./Filter/Datas";
const { Option } = Select;

export default function Drawers(props) {
  const [Filters, setFilters] = useState({
    styles: [],
    area: [],
  });
  const [datas, setDatas] = useState([]);
  const [realdatas, setRealDatas] = useState([]);

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
  function refreshPage() {
    window.location.reload(false);
  }

  return (
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
  );
}
