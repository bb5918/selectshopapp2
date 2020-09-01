import React, { useState } from "react";
import Navbar from "./Navbar";
import Map from "./Map";
import Recommend from "./Recommend";
import UploadData from "./UploadData";
export default function Landing() {
  const [showLanding, setShowLanding] = useState(true);
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "30px" }}>
        <UploadData />
      </div>
      <div style={{ paddingTop: "60px" }}>
        <Map />
      </div>
      <Recommend />
    </div>
  );
}
