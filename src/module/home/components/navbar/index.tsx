export const navItems = [
  {
    id: "about-us",
    label: "About Us",
    href: "/about-us",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    href: "/onboarding",
  },
  {
    id: "faq",
    label: "FAQ",
    href: "/faq",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    href: "/testimonials",
  },
];

export function Navbar() {
  return (
    <header className="h-[7rem] bg-primary-500 flex justify-center items-center navbar">
      <div className="w-fit flex flex-col items-center gap-7">
        <div>
          <img alt="logo-amritam" src="/logo.svg" />
        </div>
        <nav className=" flex font-[poppins] gap-10">
          {navItems.map((items) => {
            return (
              <div
                key={items.id}
                className=" text-xl max-md:text-sm font-normal"
              >
                {items.label}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
