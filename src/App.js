import React, { useState, useEffect } from "react";
import galleryApi from "./galleryApi";
import GalleryNavigation from "./GalleryNavigation";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

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

  return (
    <BrowserRouter>
      <GalleryNavigation galleries={galleries}></GalleryNavigation>
    <Switch>
      <Route exact path='/'/>
      <Route path='/gallery/:id' render={()=> <GalleryView />} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
