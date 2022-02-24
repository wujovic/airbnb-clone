import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM YYY");
  const formattedEndDate = format(new Date(endDate), "dd MMMM YYY");

  return (
    <div>
      <Header
        placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | guests: ${numberOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {formattedStartDate} - {formattedEndDate} - guests:{" "}
            {numberOfGuests}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
