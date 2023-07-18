import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col flex-1 justify-between gap-4">
      <div className="figure h-300 w-full relative">
        <Image
          className="object-cover grayscale"
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
        />
        <div className="figure-desc z-10 p-1 absolute bg-green-600 bottom-2 left-2">
          <h1 className="text-xl font-bold">Digital Storyteller</h1>
          <p>Handcrafting award winning digital experiences</p>
        </div>
      </div>

      <div className="flex gap-24">
        <div className="flex-1">
          <h1 className="font-bold text-xl">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            illum odit fugit inventore autem dolore soluta recusandae,
            repudiandae molestias i, aperiam saepe eos necessitatibus placeat
            aliquam officiis, magni elcanio voluptatibus labore! Ea.
            Lorem ipsum dolor sit amet consectetur, adipicing elit. Aliquid
            Lorem ipsum dolor sit amet consectetur, adipicing elit. Aliquid
            aliquam officiis, magni voluptatibus labore! Ea.
            <br/>
            <br/>
            Lorem ipsum  consectetur, adipisicing elit. Aliquid
            aliquam officiis sonala,  voluptatibus labore?
          </p>
        </div>

        <div className="flex-1">
          <h1 className="font-bold text-xl">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            illum odit fugit inventore autem dolore soluta recusandae,
            aliquam officiis, magni voluptatibus labore! Ea.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            aliquam officiis, magni voluptatibus: <br/>
            - Dynamic Website<br/>
            - Fast and Handy<br/>
            - Mobile Apps<br/><br/>
            <Button title={"contact"}/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
