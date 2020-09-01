import React, { useEffect, useState } from "react";
import axios from "axios";

function MapData(props) {
  var markerList = [];
  var infowindowList = [];
  const datas = props.datas;

  useEffect(() => {
    if (datas.length > 1) {
      console.log("hi");
      console.log(datas);
      let container = document.getElementById("map");
      let options = {
        center: new window.kakao.maps.LatLng(37.544028, 127.001819),
        level: 7,
      };
      let map = new window.kakao.maps.Map(container, options);
      datas.map((item, index) => {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(item.lat, item.lng),
        });
        var content = `<div><a href="/">${item.name}</a><br/>#${item.style}<br/>"${item.comment}"</div>`;
        const infowindow = new window.kakao.maps.InfoWindow({
          content: content,
        });

        markerList.push(marker);
        infowindowList.push(infowindow);
      });

      for (var i = 0, ii = markerList.length; i < ii; i++) {
        window.kakao.maps.event.addListener(map, "click", ClickMap(i));
        window.kakao.maps.event.addListener(
          markerList[i],
          "click",
          getClickHandler(i)
        );
      }

      function ClickMap(i) {
        return function () {
          var infowindow = infowindowList[i];
          infowindow.close();
        };
      }

      function getClickHandler(i) {
        return function () {
          var marker = markerList[i];
          var infowindow = infowindowList[i];
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        };
      }
    }
  }, [datas]);

  return (
    <div className="Map">
      <div id="map" style={{ width: "100%", height: "550px" }} />
    </div>
  );
}
export default MapData;
