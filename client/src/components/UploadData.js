import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Typography, Button, Form, message, Input, Icon } from "antd";
import Axios from "axios";
import responsiveObserve from "antd/lib/_util/responsiveObserve";
const { Title } = Typography;

const { TextArea } = Input;

const Area = [
  { key: 1, value: "동묘/종로" },
  { key: 2, value: "합정/홍대/신촌" },
  { key: 3, value: "이태원" },
  { key: 4, value: "신사/가로수길" },
];
const Style = [
  { key: 1, value: "키치, 펑크, 고스" },
  { key: 2, value: "플로랄, 러블리" },
  { key: 3, value: "빈티지, 레트로" },
  { key: 4, value: "스포츠 브랜드" },
  { key: 5, value: "프리미엄, 매스티지 " },
];
function UploadData(props) {
  const history = useHistory();

  const [nameValue, setNameValue] = useState("");
  const [latValue, setLatValue] = useState();
  const [lngValue, setLngValue] = useState();
  const [areaValue, setAreaValue] = useState(1);
  const [styleValue, setStyleValue] = useState(1);
  const [commentValue, setCommentValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };
  const onLatChange = (event) => {
    setLatValue(event.currentTarget.value);
  };
  const onLngChange = (event) => {
    setLngValue(event.currentTarget.value);
  };
  const onAreaChange = (event) => {
    setAreaValue(event.currentTarget.value);
  };
  const onStyleChange = (event) => {
    setStyleValue(event.currentTarget.value);
  };
  const onCommentChange = (event) => {
    setCommentValue(event.currentTarget.value);
  };
  const onUrlChange = (event) => {
    setUrlValue(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const variables = {
      name: nameValue,
      lat: latValue,
      lng: lngValue,
      area: areaValue,
      styles: styleValue,
      comment: commentValue,
      url: urlValue,
    };
    Axios.post("/api/data/uploadData", variables).then((response) => {
      if (response.data.success) {
        alert("업로드 성공");
        window.location.reload(false);
      } else {
        alert("업로드 실패");
      }
    });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <label>이름</label>
        <Input onChange={onNameChange} value={nameValue} />
        <label>위도</label>
        <Input onChange={onLatChange} value={latValue} />
        <label>경도</label>
        <Input onChange={onLngChange} value={lngValue} />
        <label>도시</label>
        <br />
        <select onChange={onAreaChange} value={areaValue}>
          {Area.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <label>스타일</label>
        <br />
        <select onChange={onStyleChange} value={styleValue}>
          {Style.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <label>코멘트</label>
        <Input onChange={onCommentChange} value={commentValue} />
        <label>url</label>
        <Input onChange={onUrlChange} value={urlValue} />
        <Button onClick={onSubmit}>제출</Button>
      </Form>
    </>
  );
}

export default UploadData;
