import React from "react";
import { Button } from "../../../../components/button";

export function Hero() {
  return (
    <section className=" flex-grow w-full flex justify-center bg-linear-to-r from-primary-accent to-primary-500 to-50%">
      <div className=" basis-[86%]  h-auto mt-6 flex items-center justify-between max-[962px]:flex-col">
        <div className=" pt-6 flex flex-col gap-12 justify-center h-full flex-[75%]">
          <div className=" flex flex-col gap-12 ">
            <div className="flex flex-col gap-3">
              <h5 className=" text-base font-medium  text-grey-600">
                Namaste, Welcome to Amrutam
              </h5>
              <h1 className=" text-4.5xl font-extrabold text-extrabold-accent">
                Join Amrutam -{" "}
                <span className=" text-secondary">Grow Your Practice</span>
              </h1>
              <p className=" text-xl font-medium text-grey-600 max-w-[33rem]">
                Connect with more patients, set your own schedule, and grow your
                Ayurvedic practice effortlessly.
              </p>
            </div>
            <Button className="max-w-[16.4rem] px-14 py-[0.9rem] rounded-xl">
              <div className=" text-white text-xl font-bold w-full h-fit text-center">
                Join Now
              </div>
            </Button>
          </div>
          <div className="flex gap-6.5 w-fit items-center">
            <div className="  text-center">
              <div className="  text-2xl font-semibold text-black">500+</div>
              <div className="font-medium text-sm text-grey-700">
                Average Active <br /> Users
              </div>
            </div>
            <div className=" w-px h-[2.7rem] rounded-[1.9rem] bg-secondary-200"></div>
            <div className="  text-center">
              <div className="  text-2xl font-semibold text-black">40+</div>
              <div className="font-medium text-sm text-grey-700">
                Average daily <br /> free calls
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow h-full">
          <img
            className="w-full h-full object-contain"
            alt="hero-image"
            src="/hero-image.svg"
          />
        </div>
      </div>
    </section>
  );
}
