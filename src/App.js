import React, { useState, useEffect } from "react";
import galleryApi from "./galleryApi";
import Gallery from "./Gallery";

function App() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const helperFunc = async () => {
      let galleryData = await galleryApi();
      let tenGalleries = galleryData.slice(0, 10);
      setGalleries(tenGalleries);
      console.log(tenGalleries);
    };
    helperFunc();
  }, []);

  return <Gallery galleries={galleries}></Gallery>;
}

export default App;
