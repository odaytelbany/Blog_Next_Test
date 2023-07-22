import { PortoItem } from "@/components/PortoItem/PortoItem";
import React from "react";

function page() {
  return (
    <div>
      <PortoItem
        title="Lorem ipsum dolor sit amet consecut oesef elit"
        src="https://images.freeimages.com/images/large-previews/3b5/whats-next-1361638.jpg"
        blog={true}
        reverse={true}
      />

      <PortoItem
        title="Lorem ipsum dolor sit amet consecut oesef elit"
        src="https://images.freeimages.com/images/large-previews/000/pet-cat-1561822.jpg"
        blog={true}
        reverse={true}
      />

      <PortoItem
        title="Lorem ipsum dolor sit amet consecut oesef elit"
        src="https://images.freeimages.com/images/large-previews/ab7/gerber-and-rose-2-1544099.jpg"
        blog={true}
        reverse={true}
      />
    </div>
  );
}

export default page;
