import React from "react";
import GalleryNavigation from './GalleryNavigation'


const Gallery = ({galleries}) => {
  console.log(galleries)
  return (
    <>
      <GalleryNavigation galleries={galleries} />
    </>
  );
};

export default Gallery;
