import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GalleryView = () => {
  const params = useParams();

  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const fetchGallery = async () => {
      const galleryRes = await fetch(
        `https://data.nhm.ac.uk/api/3/action/package_show?id=${params.galleryId}`
      );

      const galleryJSON = await galleryRes.json();
      setGallery(galleryJSON.result);
    };
    fetchGallery();
  }, [params]);

  return (
    <>
      <h2>{gallery.title}</h2>
      <span>
        {gallery.isopen ? "Gallery is Open!" : "Gallery is Closed :("}
      </span>
      {gallery.resources &&
        gallery.resources.map((obj) => <GalleryObject key={obj.id} {...obj} />)}
    </>
  );
};

export default GalleryView;
