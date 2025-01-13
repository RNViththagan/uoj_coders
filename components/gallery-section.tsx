import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

const galleryImages = [
  {
    id: 4,
    content: <ImageSkeleton />,
    className: "h-56 md:col-span-2",
    thumbnail: "/gallery/1Q9A2967.jpg",
  },
  {
    id: 5,
    content: <ImageSkeleton />,
    className: "h-56 md:col-span-1",
    thumbnail: "/gallery/1Q9A2970.jpg",
  },
  {
    id: 6,
    content: <ImageSkeleton />,
    className: "h-56 md:col-span-1",
    thumbnail: "/gallery/1Q9A2973.jpg",
  },
  {
    id: 7,
    content: <ImageSkeleton />,
    className: "h-56 md:col-span-2 rows-span-2",
    thumbnail: "/gallery/1Q9A3044.jpg",
  },
  {
    id: 8,
    content: <ImageSkeleton />,
    className: "h-56 md:col-span-3",
    thumbnail: "/gallery/1Q9A3057.jpg",
  },
];

export default function GallerySection() {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden"
      id="gallery">
      <h1 className="font-varino text-xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
        Gallery
      </h1>
      <div className="h-auto py-10 w-full">
        <LayoutGrid cards={galleryImages} />
      </div>
    </div>
  );
}

export function ImageSkeleton() {
  return <div className=""></div>;
}
