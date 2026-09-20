"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

const PostImage = ({ src, alt }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-100 md:w-150 md:h-auto shrink-0">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-light" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default PostImage;
