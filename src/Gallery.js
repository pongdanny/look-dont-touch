import React from "react";

const Gallery = (galleries) => {
  console.log(galleries);
  return (
    <>
      {galleries.galleries.map((gallery) => (
        <li key={gallery}>{gallery}</li>
      ))}
    </>
  );
};

export default Gallery;
