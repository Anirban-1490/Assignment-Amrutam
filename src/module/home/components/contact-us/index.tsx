import React from "react";
import { Textfield } from "../../../../components/text-field";
import { Button } from "../../../../components/button";

export function Contact() {
  return (
    <section className=" bg-primary-500">
      <div className=" py-20 px-25 max-sm:px-4 flex flex-col items-center gap-10">
        <div className=" text-center max-w-[45%] max-sm:max-w-full">
          <h2 className=" text-secondary-accent  text-shadow-blue">
            Let’s Connect
          </h2>
          <p className=" font-normal leading-[150%] text-grey-700 mt-2">
            We’re here to help you on your wellness journey. Reach out to us for
            any questions, product inquiries, or personalized advice.
          </p>
        </div>
        <div className=" flex gap-6 max-lg:flex-col">
          <div className=" max-w-[31rem] max-lg:max-w-full">
            <img className="w-full h-full object-cover" src="/contact-bg.jpg" />
          </div>
          <form
            className="p-9 border basis-[100%] border-grey-200 rounded-lg"
            action=""
          >
            <div className="grid grid-cols-2 gap-6">
              <Textfield inputProps={{ name: "name" }} label="Your Name" />
              <Textfield
                inputProps={{ name: "contact" }}
                label="Your Contact Number"
              />
              <div className=" col-span-2">
                <Textfield inputProps={{ name: "email" }} label="Your Email" />
              </div>
              <div className=" col-span-2">
                <Textfield
                  inputProps={{ rows: 3, name: "message" }}
                  textarea
                  label="Message (Optional)"
                />
              </div>
              <div className=" max-xl:col-span-2 ">
                <Button type="submit" className=" py-3.5 px-11 rounded-lg">
                  <div className=" font-bold text-xl text-white">
                    Send Message
                  </div>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
