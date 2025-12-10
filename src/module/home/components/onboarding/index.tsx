import React from "react";
import { Button } from "../../../../components/button";
const onboardingSteps = [
  {
    id: "step-1",
    title: "Step 1: Get your referral code",
    description: "Contact us to receive your unique referral code.",
  },
  {
    id: "step-2",
    title: "Step 2: Register on Amrutam",
    description:
      "Sign up on the Amrutam Doctors app or website to join our specialist network.",
  },
  {
    id: "step-3",
    title: "Step 3: Complete KYC",
    description:
      "Fill in your details and upload the required documents for verification.",
  },
  {
    id: "step-4",
    title: "Step 4: Start consulting",
    description:
      "Once verified, begin offering consultations and helping patients.",
  },
];
const consultationsMobile = [
  {
    id: "feature-1",
    title: "Value Your Practice",
    imgUrl: "/community/con-1.svg",
    imgOnTop: false,
  },
  {
    id: "feature-2",
    title: "Today’s Healing Journey",
    imgUrl: "/community/con-2.svg",
    imgOnTop: true,
  },
  {
    id: "feature-3",
    title: "Consultation Details",
    imgUrl: "/community/con-3.svg",
    imgOnTop: false,
  },
];

export function Onboarding() {
  return (
    <section className=" w-full bg-primary-500 py-10">
      <div className="flex flex-col items-center gap-9 ">
        <div className="w-fit text-center ">
          <h2 className=" text-secondary-accent tracking-[1%] ">
            Join Our Circle of Care
          </h2>
          <p className=" tracking-[0.07rem] text-grey-700 font-medium">
            Becoming a part of Amrutam is simple
          </p>
        </div>

        <div className="flex items-center max-lg:flex-col  py-[1.9rem] mx-24.5 max-sm:mx-3 gap-27">
          <ul className=" basis-[50%] flex flex-col gap-3 max-lg:order-1">
            {onboardingSteps.map((step) => {
              return (
                <li
                  key={step.id}
                  className=" py-7 px-8 border rounded-lg text-secondary-accent/50"
                >
                  <h4 className=" mb-2.5 text-secondary font-bold">
                    {step.title}
                  </h4>
                  <p className=" text-sm font-normal text-secondary">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ul>
          <div>
            <img src="/community/com-1.svg" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" mt-8 w-full flex flex-col gap-7 items-center">
          <div className=" flex gap-9 mx-auto w-fit max-md:flex-col">
            <Button className=" py-3 px-[1rem] rounded-lg">
              <div className=" text-white text-xl font-normal font-[nunito]">
                Consultations
              </div>
            </Button>
            <Button
              varient="outlined"
              className=" py-3 px-[1rem] rounded-lg border-secondary/50"
            >
              <div className=" text-secondary text-xl font-normal font-[nunito]">
                Payment withdrawal
              </div>
            </Button>
            <Button
              varient="outlined"
              className=" py-3 px-[1rem] rounded-lg border-secondary/50"
            >
              <div className=" text-secondary text-xl font-normal font-[nunito]">
                Schedule
              </div>
            </Button>
          </div>
          <div className=" py-7 flex gap-28 max-lg:flex-col">
            {consultationsMobile.map((con) => {
              return (
                <div
                  className={`flex flex-col items-center gap-[1rem]`}
                  key={con.id}
                >
                  <div
                    className={`${
                      con.imgOnTop ? "order-1" : "-order-1"
                    } font-bold text-[1.5rem] text-secondary`}
                  >
                    {con.title}
                  </div>
                  <div>
                    <img src={con.imgUrl} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" w-fit mx-auto mt-10">
        <Button className=" py-3 px-9 rounded-xl">
          <div className=" font-bold text-xl text-white">Join Now</div>
        </Button>
      </div>
    </section>
  );
}
