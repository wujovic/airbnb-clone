import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard(props: any) {
  const img = props.img;
  const location = props.location;
  const title = props.title;
  const description = props.description;
  const star = props.star;
  const price = props.price;
  const total = props.total;

  //<HeartIcon className="md:hidden h-7" />

  return (
    <div className="flex flex-col md:flex-row py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-[100%] md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          src={img}
          alt={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow md:pl-5">
        <div className="mt-4 md:mt-0 md:flex md:justify-between">
          <p>{location}</p>
          <HeartIcon className="hidden md:inline-flex md:h-7 md:cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
