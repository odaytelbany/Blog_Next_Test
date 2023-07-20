import { PortoItem } from "@/components/PortoItem/PortoItem";
import React from "react";

const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h3 className="text-green-600 text-xl font-bold mb-5">
        {params.category}
      </h3>
      <PortoItem
        title="Creative Portofolio"
        src="https://images.freeimages.com/images/large-previews/ab7/gerber-and-rose-2-1544099.jpg"
        reverse={false}
      />

      <PortoItem
        title="Creative Portofolio"
        src="https://images.freeimages.com/images/large-previews/31a/traverse-1234278.jpg"
        reverse={true}
      />

      <PortoItem
        title="Creative Portofolio"
        src="https://images.freeimages.com/images/large-previews/9be/forest-of-dreams-1410532.jpg"
        reverse={false}
      />
    </div>
  );
};

export default page;
