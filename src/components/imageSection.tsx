import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="container py-16">
      <Image
        src={require("../../public/bottomImage.svg")}
        loading="lazy"
        alt="bottom image"
        width={500}
        height={500}
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default ImageSection;
