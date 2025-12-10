export const reviews = [
  {
    id: 1,
    name: "Dr. Pooja Deshmukh",
    designation: "BAMS",
    image: "/reviews/review-user-img.svg",
    ratingImg: "/reviews/rating.svg",
    isHighlighted: false,
    feedback:
      "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical–free products help restore balance and promote holistic well–being. I often recommend them to my patients seeking natural healing.",
  },
  {
    id: 2,
    name: "Dr. Rajesh Iyer",
    designation: "Ayurvedic Practitioner",
    image: "/reviews/review-user-img.svg",
    ratingImg: "/reviews/rating.svg",
    isHighlighted: true,
    feedback:
      "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
  },
  {
    id: 3,
    name: "Dr. Ananya Sharma",
    designation: "BAMS",
    image: "/reviews/review-user-img.svg",
    ratingImg: "/reviews/rating.svg",
    isHighlighted: false,
    feedback:
      "As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products.",
  },
];

export function Review() {
  return (
    <section className=" bg-primary-500">
      <div className="py-8  flex flex-col gap-12">
        <div className="w-fit text-center flex flex-col gap-2 mx-auto">
          <h2 className=" text-secondary-accent text-shadow-blue">
            What other Ayurvedic Doctors are Saying
          </h2>
          <p className=" text-xl text-grey-700 font-normal">
            Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
          </p>
        </div>
        <div className="flex gap-5 justify-center items-center max-[962px]:flex-col">
          {reviews.map((review) => {
            return (
              <article
                className={` ${
                  !review.isHighlighted
                    ? "basis-[19.5%] max-[962px]:basis-auto max-[962px]:w-[75%]"
                    : "basis-[25.5%] max-[962px]:basis-auto max-[962px]:w-[90%]"
                }`}
                key={review.id}
              >
                <div className=" pt-8 pb-9 px-7.5 flex flex-col gap-6 bg-primary-review">
                  <div className=" flex items-center gap-3">
                    <div
                      className={` overflow-hidden ${
                        !review.isHighlighted ? "w-11 h-11" : ""
                      }`}
                    >
                      <img alt={review.name} src={review.image} />
                    </div>
                    <div>
                      <h5
                        className={`font-semibold text-grey-800 mb-1 ${
                          !review.isHighlighted ? "text-sm" : ""
                        }`}
                      >
                        {review.name},{" "}
                        <span className=" font-normal text-grey-600">
                          {review.designation}
                        </span>
                      </h5>
                      <div>
                        <img src={review.ratingImg} alt="rating-4" />
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-base text-grey-500 font-normal ${
                      !review.isHighlighted ? "text-xs" : ""
                    }`}
                  >
                    "{review.feedback}"
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
