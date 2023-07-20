import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

export const PortoItem = ({title, src, reverse}) => {
  return (
    <div className={`flex gap-24 h-350 ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="description m-auto flex-1">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          nostrum sed ipsam hic quisquam, magnam totam! Ipsam modi in eos harum
          doloribus, quae vero obcaecati accusamus nesciunt odio eveniet quos?
        </p>
        <Button title="See More" />
      </div>
      <div className="relative flex-1">
        <Image className='object-cover' src={src} fill={true} alt="proto"/>
      </div>
    </div>
  );
};
