import ApplicationLogo from "@/Components/ApplicationLogo";
import Input from "@/Components/Input";
import useTravels from "@/Hooks/useTravels";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import Rating from "./Rating";
import TravelCard from "@/Components/Card/TravelCard";
import Each from "@/Components/Each";
import { Link, router } from "@inertiajs/react";
const HeroSection = () => {
  const { travels, isLoading } = useTravels();
  const [keyword, setKeyword] = useState("");
  function searchTravel(e) {
    e.preventDefault();
    console.log(keyword);
    router.get("/travels/all?travel=" + keyword);
  }

  return (
    <div className='relative bg-[url("/images/bg.webp")] w-full h-screen bg-cover bg-top bg-blend-darken'>
      <article className="absolute top-1/2 -translate-y-1/2 w-full max-w-[800px] left-1/2 -translate-x-1/2 px-7 flex flex-col justify-center items-center gap-6">
        <ApplicationLogo className="w-96 rounded-full" />
        {/* <p className="text-white text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          incidunt rem quam officiis error expedita animi excepturi, ipsum modi
          aspernatur perferendis asperiores architecto corrupti inventore est
          harum, voluptatem veritatis laborum! Cumque nam quos quis repudiandae.
          Sint nulla optio labore vero molestiae reprehenderit neque corporis
          perspiciatis. Exercitationem possimus sit molestiae nostrum explicabo
          soluta dolorem beatae iste. Ullam, sint tenetur? Possimus, obcaecati.
        </p> */}
      </article>
      <div className="absolute w-full pb-32 bg-[#F7F9FA] top-[90%] rounded-t-[40px] md:rounded-t-[90px] text-black px-7">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Travel terbaik untuk mu!</h1>
            <form
              onSubmit={searchTravel}
              className="flex justify-center items-center gap-3 w-6/12"
            >
              <Input
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
                type={"search"}
                placeholder={"Cari trip/travel berdasarkan nama"}
              />
              <button className="flex px-4 py-2 bg-blue-500 text-white items-center justify-center gap-2 rounded-md">
                <LuSearch />
                Cari
              </button>
            </form>
          </div>
          {travels.length === 0 && <p>Belum ada travel yang tersedia</p>}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-3">
            <Each
              of={travels.slice(0, 4)}
              render={(travel, index) => (
                <TravelCard
                  key={index}
                  rating={travel.rating}
                  rating_count={travel.rating_count}
                  src={travel.thumbnail}
                  id={travel.id}
                  title={travel.title}
                  price={travel.price}
                />
              )}
            />
          </div>
          <div className="flex justify-center items-center w-full mt-6">
            <Link
              href={route("travel.all")}
              className="px-8 py-2 bg-blue-500 text-white rounded-full"
            >
              Tampilkan Lainya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
