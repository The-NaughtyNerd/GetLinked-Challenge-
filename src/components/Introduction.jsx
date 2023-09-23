import { arrow, introImage, starPurple } from '../assets';

const Introduction = () => {
  return (
    <>
      <div className="md:px-4 lg:px-10 flex md:flex-row flex-col items-center pt-16 md:space-x-16 font-montserrat border-b-[0.5px] border-gray-500 pb-8">
        <div className="md:w-1/2 w-full relative mx-auto px-7 md:px-0">
          <span className="md:w-full w-1/2">
            <img
              src={starPurple}
              alt="starPurple"
              className=" shine-animation"
            />
          </span>

          <img
            src={introImage}
            alt="intro-image"
            className="object-contain bounce-animation"
          />

          <span className="absolute md:right-36 lg:right-20 lg:-bottom-5 md:-bottom-8 right-36 -bottom-6">
            <img
              src={arrow}
              alt="arrow"
              className="md:w-full w-[80%] bounce-animation"
            />
          </span>
        </div>
        <div className="md:w-1/2 w-full relative md:pt-0 pt-10 px-7 md:px-0 text-center md:text-start">
          <h1 className="text-4xl font-bold font-clashDisplay text-white">
            Introduction to getlinked <br className="md:block hidden" />
            <span className="text-primary">tech Hackathon 1.0</span>
          </h1>

          <p className="text-gray-200 pt-4 ">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, adesign maverick, or aconcept wizard, you'll have the chance
            to transform your idesa into reality.Solving real-world problems,
            pushing the boundaries of technology, and creating solutions that
            can change the world, that's what we're all about
          </p>

          <span className="absolute md:right-0 md:top-10 top-20 right-5">
            <img
              src={starPurple}
              alt="star-purple"
              className="blink-animation"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Introduction;
