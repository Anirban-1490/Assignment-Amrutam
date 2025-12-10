export const featuredImages = [
  {
    id: "image-295",
    title: "THE TIMES OF INDIA",
    url: "/featured/image 295.svg",
  },
  {
    id: "image",
    title: "YOURSTORY",
    url: "/featured/image.svg",
  },
  {
    id: "image-1",
    title: "Livingetc",
    url: "/featured/image-1.svg",
  },
  {
    id: "image-2",
    title: "GQ",
    url: "/featured/image-2.svg",
  },
  {
    id: "image-16",
    title: "Condé Nast Traveler",
    url: "/featured/image 16.svg",
  },

  {
    id: "image-18",
    title: "THE VOICE OF FASHION",
    url: "/featured/image 18.svg",
  },
  {
    id: "image-3",
    title: "VOGUE",
    url: "/featured/image-3.svg",
  },
  {
    id: "image-22",
    title: "LIFESTYLE ASIA",
    url: "/featured/image 22.svg",
  },

  {
    id: "image-23",
    title: "Forbes 30 Under 30",
    url: "/featured/image 23.svg",
  },
];

export function Spotlight() {
  return (
    <section className="w-full bg-primary-600">
      <div className="flex flex-col gap-12 py-8 px-24.5 max-sm:px-5 justify-center items-center">
        <div className="flex flex-col gap-1 justify-center text-center">
          <h2 className=" text-secondary-accent">Featured </h2>
          <p className=" text-xl text-grey-700 font-normal">
            Recognized and celebrated by leading publications – Amrutam in the
            spotlight!
          </p>
        </div>
        <div className=" w-full flex gap-1 justify-center items-center">
          {featuredImages.map((image) => {
            return (
              <div
                key={image.id}
                className=" h-24 w-37 flex justify-center items-center"
              >
                <img className="" src={image.url} alt={image.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
