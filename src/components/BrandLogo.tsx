"use client";

import { useState } from "react";
import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  href?: string;
};

const logoSrc = "/logo/2fastmedia-logo.svg";

export default function BrandLogo({ className = "", href }: BrandLogoProps) {
  const [showImage, setShowImage] = useState(true);

  const content = showImage ? (
    <Image
      src={logoSrc}
      alt="2fastmedia Logo"
      width={240}
      height={36}
      priority
      unoptimized
      className={`h-8 w-auto object-contain md:h-9 ${className}`}
      onError={() => setShowImage(false)}
    />
  ) : (
    <span
      className={`text-xl font-extrabold italic tracking-tight text-white ${className}`}
    >
      2fastmedia
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="inline-flex shrink-0 items-center" aria-label="2fastmedia Startseite">
      {content}
    </a>
  );
}
