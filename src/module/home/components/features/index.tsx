import React from "react";

const features = [
  {
    id: "feature-1",
    title: (
      <h3 className=" text-secondary">
        Instant <span className=" font-extrabold">FREE</span> 5-Mins Call
      </h3>
    ),
    description: (
      <p className=" text-lg font-medium text-grey-600">
        We understand the importance of building trust with your patients.
        That’s why Amrutam offers a{" "}
        <span className=" text-grey-900 font-bold">free 5-minute call</span>,
        helping you connect instantly and foster lasting patient relationships
        with ease.
      </p>
    ),
    imgUrl: "/features/feature-1.svg",
    imgOnLeft: true,
  },
  {
    id: "feature-2",
    title: "Forum for Meaningful Connections",
    description:
      "We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the ‘Thoughts’ section allows you to share deeper Ayurvedic wisdom.",
    imgUrl: "/features/feature-2.svg",
    imgOnLeft: false,
  },
  {
    id: "feature-3",
    title: "Choose Your Session Mode",
    description:
      "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
    imgUrl: "/features/feature-3.svg",
    imgOnLeft: true,
  },
  {
    id: "feature-4",
    title: "Smart Wallet",
    description:
      "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
    imgUrl: "/features/feature-4.svg",
    imgOnLeft: false,
  },
  {
    id: "feature-5",
    title: "Flexible Work Timing",
    description:
      "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
    imgUrl: "/features/feature-5.svg",
    imgOnLeft: true,
  },
];

export function Features() {
  return (
    <section className=" bg-primary-500">
      <div className=" pt-8 flex flex-col items-center gap-29.5">
        <div className="w-fit text-center">
          <h2 className=" text-secondary">Why Doctors Choose Us?</h2>
          <p className=" tracking-[1%] text-grey-700 font-medium">
            Unlock the Benefits of Smarter Healthcare Management and Patient
            Care
          </p>
        </div>
        <div className="w-[80%]  flex flex-col gap-[8.8rem] mb-27">
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className={` flex gap-28 items-center max-lg:flex-col`}
              >
                <div
                  className={`flex-grow flex ${
                    feature.imgOnLeft ? "-order-1 justify-end" : "order-1"
                  } max-lg:-order-1`}
                >
                  <img src={feature.imgUrl} alt={feature.id} />
                </div>
                <div className={`basis-[50%] flex justify-center`}>
                  <div className="basis-[65%]">
                    {typeof feature.title == "string" ? (
                      <h3 className=" text-secondary font-bold ">
                        {feature.title}
                      </h3>
                    ) : (
                      feature.title
                    )}

                    {typeof feature.description == "string" ? (
                      <p className=" text-lg text-grey-600 font-medium">
                        {feature.description}
                      </p>
                    ) : (
                      feature.description
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
