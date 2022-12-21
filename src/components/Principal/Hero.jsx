import React from "react";
import { Outlet } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div>Hero</div>
      <Outlet />
    </>
  );
};

export default Hero;
