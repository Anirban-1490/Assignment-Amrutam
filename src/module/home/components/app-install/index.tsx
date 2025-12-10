export const appFeatures = [
  {
    id: 1,
    text: (
      <>
        Build Trust and <br /> Community with Forum
      </>
    ),
    icon: "/icons/trust.svg",
  },
  {
    id: 2,
    text: (
      <>
        Earn More with Pay <br /> Per Conversation
      </>
    ),
    icon: "/icons/money.svg",
  },
  {
    id: 3,
    text: (
      <>
        Attract Patients with <br /> 5–Minute Free Call
      </>
    ),
    icon: "/icons/call-outline.svg",
  },
  {
    id: 4,
    text: (
      <>
        Instant Access to Your <br /> Earnings with Wallet
      </>
    ),
    icon: "/icons/wallet.svg",
  },
];

export function AppInstall() {
  return (
    <section className=" bg-primary-500">
      <div className=" py-28 ">
        <div className="flex max-xl:flex-col max-xl:gap-15 px-21 max-sm:px-3 bg-primary-800 w-full py-12 h-full">
          <div className=" flex justify-center basis-[50%] max-xl:order-1">
            <div className="flex-col flex gap-8">
              <div className=" max-xl:text-center">
                <h2 className=" mb-6 leading-12 text-secondary">
                  Get Started Today – <br />
                  Download the App Now!
                </h2>
                <p className=" font-medium text-grey-600 leading-[131%]">
                  Simplify consultations, manage patients, and <br /> grow your
                  practice—all in one place.
                </p>
              </div>
              <ul className=" grid grid-cols-2 gap-x-5 gap-y-10 w-fit">
                {appFeatures.map((feature) => {
                  return (
                    <li
                      key={`${feature.id}`}
                      className=" flex  gap-8 items-center p-2 max-w-70 max-md:max-w-full border border-grey-400 rounded-xl"
                    >
                      <div>
                        <img src={feature.icon} />
                      </div>
                      <div className=" text-base text-secondary-accent font-medium leading-[131%]">
                        {feature.text}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-7">
                <div>
                  <img src="/icons/play-store.svg" />
                </div>
                <div>
                  <img src="/icons/app-store.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-xl:block max-xl:h-100 max-sm:max-h-70 items-stretch flex-grow ">
            <div className=" w-full h-full  relative">
              <img
                className=" absolute h-full left-[50%] bottom-[1.5rem] max-xl:bottom-[3rem] translate-x-[-50%] scale-135 "
                src="/mobile-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
