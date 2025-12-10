import { Button } from "../../../../components/button";

export function CTA() {
  return (
    <div className="w-full h-[4.2rem] bg-topbar flex justify-center items-center gap-16 max-md:gap-4 max-md:py-3 max-md:flex-col max-md:h-auto  sticky top-0 z-20 ">
      <h4 className="text-grey-100 font-medium text-xl text-end w-fit">
        Register Yourself As An Amrutam Doctor
      </h4>
      <div className=" ">
        <Button className=" rounded-2xl px-35.5 py-3.5">
          <div className=" flex items-center gap-2.5">
            <div>
              <img alt="join-now" src="/icons/doctor-01.svg" />
            </div>
            <div className=" text-white text-base font-bold">Join Now</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
