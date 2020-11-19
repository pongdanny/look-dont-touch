import React from "react";

const GalleryObject = (props) => {
  return (
    <div>
      <a href={props.url}>{props.name}</a>
    </div>
  );
};

export default GalleryObject;
