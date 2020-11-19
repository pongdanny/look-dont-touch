import React from "react";
import { NavLink } from "react-router-dom";

const GalleryNavigation = ({ galleries }) => {
  console.log(galleries);
  return (
    <>
      <ul>
        {galleries.map((gallery) => (
          <li key={gallery}>
            <NavLink activeClassName="active" to={`/gallery/${gallery}`}>
              {gallery}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryNavigation;
