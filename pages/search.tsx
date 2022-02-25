import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search(props: any) {
  const router = useRouter();
  const searchResults = props.searchResults;

  const { location, startDate, endDate, numberOfGuests } = router.query;
  //@ts-ignore
  const formattedStartDate = format(new Date(startDate), "dd MMM");
  //@ts-ignore
  const formattedEndDate = format(new Date(endDate), "dd MMM");

  return (
    <div>
      <div className="md:hidden">
        <Header />
      </div>
      <div className="hidden md:grid">
        <Header
          placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | guests: ${numberOfGuests}`}
        />
      </div>
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

          <div className="flex flex-col">
            {searchResults?.map((item: any) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        {/* <section className="hidden xl:inline-flex xl:min-w-[600px] text-white">
          <Map />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
