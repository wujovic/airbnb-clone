import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map(props: any) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 57.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/wujovic/cl02ld1g6002z14qb142y795m"
      mapboxAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
}

export default Map;
