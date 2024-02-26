"use client";
import Lottie from "react-lottie";
import gridLoaderAnimationData from "@/lotties/loader-grid.json";

const Loader = () => {
  return (
    <Lottie
      options={{ animationData: gridLoaderAnimationData }}
      style={{
        borderRadius: 20,
        position: "absolute",
        top: "0",
        left: "0",
        cursor: "auto",
      }}
    />
  );
};

export default Loader;
