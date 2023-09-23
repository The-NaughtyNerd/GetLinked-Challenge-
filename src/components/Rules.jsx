import {
  purpleFlare,
  purpleFlareHalf,
  rulesImage,
  starGray,
  starWhite,
} from '../assets';

const Rules = () => {
  return (
    <>
      {/* <div className="md:px-20 flex md:flex-row flex-col-reverse items-center pt-16 md:space-x-24 font-montserrat border-b-[0.5px] border-gray-500 pb-5 relative"> */}
      <div className="md:px-4 lg:px-10 flex md:flex-row flex-col-reverse items-center pt-16 md:space-x-16 font-montserrat border-b-[0.5px] border-gray-500 pb-8 relative">
        <div className="md:w-1/2 w-full relative pt-10 px-7 md:px-0 text-center md:text-start">
          <h1 className="text-4xl font-bold font-clashDisplay text-white">
            Rules and <br className="md:block hidden" />
            <span className="text-primary">Guidelines</span>
          </h1>

          <p className="text-gray-200 pt-4 ">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, adesign maverick, or a concept wizard, you'll have the
            chance to transform your idesa into reality.Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about
          </p>

          <span className="absolute md:right-48 md:top-0 top-20 right-5">
            <img
              src={starGray}
              alt="starGray"
              className="rotate-90 md:w-full w-1/2 blink-animation"
            />
          </span>
        </div>

        <div className="md:w-1/2 w-full relative mx-auto px-7 md:px-0">
          <span className=" absolute bottom-20">
            <img
              src={starWhite}
              alt="starPurple"
              className="rotate-90 md:w-full w-1/2 shine-animation"
            />
          </span>

          <img
            src={rulesImage}
            alt="rules-image"
            className="object-contain bounce-animation"
          />

          <span className="absolute top-0 md:-bottom-96 md:-right-8 -z-10">
            <img
              src={purpleFlareHalf}
              alt="flare"
              className="w-full animate-pulse"
            />
          </span>
        </div>

        <span className="absolute -left-36 -top-20 md:top-0 md:-left-20 -z-10">
          <img
            src={purpleFlare}
            alt="flare"
            className="md:w-[80%] w-full animate-pulse"
          />
        </span>
      </div>
    </>
  );
};

export default Rules;
