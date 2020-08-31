import React from "react";
import Slider from "react-slick";
import { Card } from "antd";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
};

const array = [
  {
    id: "1",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRayagmgRWX0uWP9T0-FwnA8euXsuUkp978Ig&usqp=CAU",
  },
  {
    id: "2",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHNb0RLgMV9wgXhEnT3x6DUJ0X9GUiC6CX2g&usqp=CAU",
  },
  {
    id: "3",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3la1ztGpVlduXPZ7xa96oGc5YGcTwcUrBjw&usqp=CAU",
  },
  {
    id: "4",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMUPaZmSiXmaEUEl3STb1vHo67j45sWd4r3w&usqp=CAU",
  },
  {
    id: "5",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5VxgOBwNaq0hZmEFCZsF-Q97WBQTNC9uHhA&usqp=CAU",
  },
  {
    id: "6",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYmokysuhRtm6KPgBX42fAdcXfzkmmlZx2dA&usqp=CAU",
  },
  {
    id: "7",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTewNJx41zmT5g7YVY4GwOVGlGc4bM2VRT3bw&usqp=CAU",
  },
];
const images = array.map((image) => {
  return (
    <Card
      style={{
        height: "300px",
        display: "flex",
      }}
    >
      <div style={{ textAlign: "center", display: "block" }}>
        <img
          style={{
            width: "200px",
            height: "200px",
            display: "inline",
          }}
          key={image.id}
          src={image.src}
        />
        <p>이미지 설명</p>
      </div>
    </Card>
  );
});
export default function Recommend() {
  return (
    <div>
      <p style={{ marginLeft: "50px" }}>[지역명] 셀렉샵 추천</p>
      <Slider {...settings}>{images}</Slider>
    </div>
  );
}
