import React, { useEffect } from 'react';
import data from './data';

const Map = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(37.544028, 127.001819),
      level: 7,
    };

    let map = new window.kakao.maps.Map(container, options);

    var markerList = [];
    var infowindowList = [];

    data.forEach((item) => {
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

      //   window.kakao.maps.event.addListener(
      //     marker,
      //     'click',
      //     makeOverListener(map, marker, infowindow),
      //   );
      //   window.kakao.maps.event.addListener(
      //     marker,
      //     'dragstart',
      //     makeOutListener(infowindow),
      //   );
    });

    // function makeOverListener(map, marker, infowindow) {
    //   return function () {
    //     infowindow.open(map, marker);
    //   };
    // }
    // function makeOutListener(infowindow) {
    //   return function () {
    //     infowindow.close();
    //   };
    // }
    for (var i = 0, ii = markerList.length; i < ii; i++) {
      window.kakao.maps.event.addListener(map, 'click', ClickMap(i));
      window.kakao.maps.event.addListener(
        markerList[i],
        'click',
        getClickHandler(i),
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
  }, []);
  return (
    <div className="Map">
      <div id="map" style={{ width: '100%', height: '550px' }} />
    </div>
  );
};
export default Map;
