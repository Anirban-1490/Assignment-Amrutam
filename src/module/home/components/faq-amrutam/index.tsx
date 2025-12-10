import React from "react";
import { Button } from "../../../../components/button";

const faqs = [
  {
    id: "faq-1",
    question: "What is Amrutam?",
    answer: "",
  },
  {
    id: "faq-2",
    question: "How does Amrutam help me grow as a practitioner?",
    answer: "",
  },
  {
    id: "faq-3",
    question: "How do I become a part of Amrutam Doctor?",
    answer: "",
  },
  {
    id: "faq-4",
    question: "What is Amrutam Global as a platform?",
    answer: "",
  },
  {
    id: "faq-5",
    question: "What documents do I need to provide?",
    answer: "",
  },
  {
    id: "faq-6",
    question: "Is there a fee to join Amrutam?",
    answer: "",
  },
];

export function FAQAmrutam() {
  return (
    <section className=" bg-primary-500">
      <div className="flex flex-col gap-12 py-8  items-center">
        <div className=" text-center">
          <h2 className=" text-secondary-accent tracking-[0.01rem] text-shadow-blue">
            Frequently Asked Questions
          </h2>
          <p className=" font-normal text-grey-700 mt-2">
            Find quick answers to common questions to help you navigate the app
            and its features easily.
          </p>
        </div>
        <div className=" w-full max-w-[64rem] flex flex-col gap-6.5 max-lg:px-10">
          {faqs.map((faq) => {
            return (
              <div className="flex pb-7 border-b border-grey-300" key={faq.id}>
                <h4 className="flex-grow text-grey-600">{faq.question}</h4>
                <div>
                  <img src={"/icons/plus.svg"} />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-fit mx-auto ">
          <Button className=" py-3 px-9 rounded-xl">
            <div className=" font-bold text-xl text-white">See More</div>
          </Button>
        </div>
      </div>
    </section>
  );
}
