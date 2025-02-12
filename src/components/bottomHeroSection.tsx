import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BottomHeroSection() {
  return (
    <div className="relative">
      <div className="container py-16 relative">
        <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl max-w-96">
              The best in the class product for you today!
            </h2>
            <p className="mt-3 text-xl text-muted-foreground">
              This is a placeholder for your testimonials and what your client
              has to say, put them here and make sure its 100% true and
              meaningful.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Button
                size={"lg"}
                className="bg-green-600 text-white hover:bg-green-700"
              >
                Get a Free Demo
              </Button>
              <div className="border-l-2 pl-2 w-48 text-[12px] text-green-500 border-green-500 font-medium">
                Start work efficiently with UIFry SaaS product
              </div>
            </div>
            {/* End Buttons */}
          </div>
          {/* Col */}
          <div className="ms-4">
            {/* <Image
              className=" rounded-md absolute -right-20 -z-10 -top-10"
              src={require("../../public/vector.svg")}
              loading="lazy"
              alt="Hero image"
              width={500}
              height={500}
              quality={100}
            /> */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
      <Image
        className="absolute right-0 -z-10 -top-10"
        src={require("../../public/vector.svg")}
        loading="lazy"
        alt="Hero image"
        width={500}
        height={500}
        quality={100}
      />
    </div>
  );
}

const star = (
  <svg
    className="h-4 w-4"
    width={51}
    height={51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
      fill="currentColor"
    />
  </svg>
);
