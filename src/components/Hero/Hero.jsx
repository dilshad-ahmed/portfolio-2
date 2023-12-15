import React from "react";
import PersonImg from "../../assets/website/person.png";

const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <img src={PersonImg} alt="" className="" />
          </div>
          <div className="space-y-3 ">
            <p className="text-primary">Hello I'm Angela</p>
            <h1 className="text-5xl font-semibold">Visual Designer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab autem ducimus
              incidunt blanditiis similique? Eum magnam minima suscipit eius
              architecto odio aperiam, nostrum ipsum.
            </p>
            <button className="uppercase bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white">
              About me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
