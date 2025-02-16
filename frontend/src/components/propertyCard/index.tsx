"use client";

import { HTMLProps, useState } from "react";
import { EyeIcon, HeartIcon } from "../icons";

interface PropertyCardProps extends HTMLProps<HTMLDivElement> {
  imageURL: string;
  title: string;
  pid: number;
  city: string;
  type: string;
  zimmer: number;
  rooms: number;
  area: number;
  price: number;
  views: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageURL = "",
  title = "",
  pid = 0,
  city = "",
  type = "",
  zimmer = 0,
  rooms = 0,
  area = 0,
  price = 0,
  views = 0,
  className = "",
  ...props
}) => {
  const [mark, setMark] = useState(false);

  function formatCurrency(value: number): string {
    const formattedValue = value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `${formattedValue} €`;
  }

  return (
    <div
      className={`w-[320px] sm:w-[360px] relative rounded-lg overflow-hidden m-2 ${className}`}
      {...props}
    >
      <button
        type="button"
        className="absolute top-5 right-5 hover:[&>svg]:scale-125"
        onClick={() => setMark((prev) => !prev)}
      >
        <HeartIcon
          className={`${
            mark ? "fill-red-500" : "fill-transparent"
          } transition-all duration-150 ease-linear`}
        />
      </button>
      <div className="absolute bottom-5 right-6 flex items-center gap-[6px] text-sm sm:text-base">
        <label className="text-[#748790] text-base">{views}</label>
        <EyeIcon />
      </div>
      <div
        className={"h-[240px] bg-no-repeat bg-cover bg-center bg-green-500"}
        style={{
          backgroundImage: `url('${imageURL}')`,
        }}
      />
      <div className="bg-[#F0F2F3] px-6 py-5 h-[188px]">
        <h3 className="uppercase font-bold mb-3 text-sm sm:text-base">
          {title}
        </h3>
        <p className="mb-3 text-xs text=[#31393D] leading-[18px] font-normal">
          ID: {pid} | {city} | {Math.abs(pid / 10)} {type}
          <br />
          {zimmer} Zimmer | {rooms} Bad | {area},00 m² | Kaufen
        </p>
        <h1 className="text-xl sm:text-2xl font-medium">
          {formatCurrency(price)}
        </h1>
      </div>
    </div>
  );
};

export default PropertyCard;
