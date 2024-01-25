import ApplicationLogo from "@/Components/ApplicationLogo";
import Input from "@/Components/Input";
import useTravels from "@/Hooks/useTravels";
import React from "react";
import { LuSearch } from "react-icons/lu";
import Rating from "./Rating";
import TravelCard from "@/Components/Card/TravelCard";
import Each from "@/Components/Each";
const HeroSection = () => {
  const { travels, isLoading } = useTravels();
  console.log(travels);
  return (
    <div className='relative bg-[url("/images/bg.webp")] w-full h-screen bg-cover bg-top bg-blend-darken'>
      <article className="absolute top-1/2 -translate-y-1/2 w-full max-w-[800px] left-1/2 -translate-x-1/2 px-7 flex flex-col justify-center items-center gap-6">
        <ApplicationLogo className="w-28 rounded-full" />
        <p className="text-white text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          incidunt rem quam officiis error expedita animi excepturi, ipsum modi
          aspernatur perferendis asperiores architecto corrupti inventore est
          harum, voluptatem veritatis laborum! Cumque nam quos quis repudiandae.
          Sint nulla optio labore vero molestiae reprehenderit neque corporis
          perspiciatis. Exercitationem possimus sit molestiae nostrum explicabo
          soluta dolorem beatae iste. Ullam, sint tenetur? Possimus, obcaecati.
        </p>
        <form className="w-full flex justify-center items-center gap-3">
          <Input type={"search"} placeholder={"Cari trip"} />
          <button className="flex px-4 py-2 bg-blue-500 text-white items-center justify-center gap-2">
            <LuSearch />
            Cari
          </button>
        </form>
      </article>
      <div className="absolute w-full h-screen bg-[#F7F9FA] top-[90%] rounded-t-[90px] text-black">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-16">
          <h1 className="text-2xl font-bold">Travel terbaik untuk mu!</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-6">
            <Each
              of={travels}
              render={(travel, index) => (
                <TravelCard
                  key={index}
                  rating={travel.rating}
                  rating_count={travel.rating_count}
                  src={travel.thumbnail}
                  id={travel.id}
                  title={travel.title}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
