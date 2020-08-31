import React, { useState } from 'react';
import Navbar from './Navbar';
import Map from './Map';
import Recommend from './Recommend';
export default function Landing() {
  const [showLanding, setShowLanding] = useState(true);
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '30px' }}>
        <Map />
      </div>
      <Recommend />
    </div>
  );
}
