export const footerLinks = [
  {
    id: 1,
    label: "About Us",
    url: "",
  },
  {
    id: 2,
    label: "Terms and Conditions",
    url: "",
  },
  {
    id: 3,
    label: "Privacy Policy",
    url: "",
  },
  {
    id: 4,
    label: "Privacy Policy for Mobile App",
    url: "",
  },
  {
    id: 5,
    label: "Shipping and Return Policy",
    url: "",
  },
  {
    id: 6,
    label: "International Delivery",
    url: "",
  },
  {
    id: 7,
    label: "For Business, Hotels and Resorts",
    url: "",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "",
    icon: "/icons/facebook.svg",
  },
  {
    id: 2,
    name: "Instagram",
    url: "",
    icon: "/icons/instagram-alt.svg",
  },
  {
    id: 3,
    name: "YouTube",
    url: "",
    icon: "/icons/youtube.svg",
  },
  {
    id: 4,
    name: "Twitter",
    url: "",
    icon: "/icons/twitter.svg",
  },
  {
    id: 5,
    name: "LinkedIn",
    url: "",
    icon: "/icons/linkedin.svg",
  },
  {
    id: 6,
    name: "Pinterest",
    url: "",
    icon: "/icons/pinterest.svg",
  },
];

export function Footer() {
  return (
    <footer className=" bg-green-500">
      <div className=" px-25 py-19 max-sm:px-7 gap-y-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] ">
        <div className="">
          <div>
            <img src="/logo.svg" />
          </div>
          <div className="mt-10.5">
            <h3 className=" text-secondary-accent font-semibold leading-[131%]">
              Get in touch
            </h3>
            <div className="mt-8 flex flex-col gap-3 text-xl font-medium text-grey-700 leading-[131%]">
              <a href="mailto:">support@amrutam.global</a>
              <p>
                Amrutam Pharmaceuticals Pvt Ltd.,
                <br /> chitragupt ganj, Nai Sadak, Lashkar,
                <br /> Gwalior - 474001
              </p>
              <p>+91 9713171999</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" text-secondary-accent font-semibold leading-[131%]">
            Information
          </h3>
          <nav className="mt-6 flex flex-col gap-3">
            {footerLinks.map((link) => {
              return (
                <a
                  className=" text-xl text-grey-700 font-medium leading-[131%]"
                  key={`${link.id}`}
                  href={link.url}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
        <div>
          <h3 className=" text-secondary-accent font-semibold leading-[131%]">
            Follow Us
          </h3>
          <div className="mt-7 flex  gap-[1rem]">
            {socialLinks.map((social) => {
              return (
                <a
                  href={social.url}
                  key={`${social.id}`}
                  className=" w-9 h-9  rounded-full bg-secondary-accent flex justify-center items-center"
                >
                  <img alt={social.name} src={social.icon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
