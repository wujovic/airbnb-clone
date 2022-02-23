import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[350px]  lg:h-[500px] xl:h-[600px] 2xl:h-[600px]">
      <Image
        className="xl:blur-sm"
        src="https://media.worldnomads.com/social-share-images/travel-photography-social.jpg"
        layout="fill"
        objectFit="cover"
        alt="banner"
      />
      <div className="absolute top-1/4 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
