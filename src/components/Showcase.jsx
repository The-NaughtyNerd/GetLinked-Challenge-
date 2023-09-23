import {
  ShowImageInner,
  bendLine,
  boom,
  bulb,
  chain,
  purpleFlare,
  showImageMain,
  starGray,
  starWhite,
} from '../assets';
import Typewriter from 'typewriter-effect';
import TImer from './TImer';

const Showcase = () => {
  return (
    <>
      <div className="text-white font-montserrat md:px-6 lg:px-16 pt-8 border-y-[0.5px] border-gray-500 relative">
        <span className="absolute md:-top-20 md:left-0 -z-10 -left-14">
          <img
            src={purpleFlare}
            alt=""
            className="animate-pulse md:w-[70%] w-full "
          />
        </span>

        <div className="flex justify-center md:justify-end relative text-center px-1 md:px-0 ">
          <h2 className="font-semibold md:text-2xl text-base ">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 70,
                cursorClassName: 'text-primary',
                strings: ['Igniting a Revolution in HR Innovation'],
              }}
            />
          </h2>
          <span className="absolute -bottom-4 right-10">
            <img src={bendLine} alt="" className="w-36" />
          </span>
          <span className="absolute md:left-0 md:-bottom-6 -bottom-10 left-4 top-9">
            <img
              src={starWhite}
              alt=""
              className="shine-animation rotate-90 w-5"
            />
          </span>
        </div>

        <div className="w-full flex flex-col pt-0 lg:pt-10 md:flex-row relative">
          <div className="relative md:w-1/2 md:text-left w-full md:pt-14 lg:pt-16 pt-10 px-3 md:px-0 text-center">
            <h1 className="relative text-4xl lg:text-6xl font-semibold font-clashDisplay text-white">
              getlinked Tech
              <br className="md:block hidden" /> Hackathon{' '}
              <span className="text-primary">1.0</span>
              <span className="absolute">
                <img src={chain} alt="" className="md:w-12 md:h-12 w-8 h-8 " />
              </span>
              <span className="absolute lg:right-[15%] md:-right-12 -right-0">
                <img src={boom} alt="" className="md:w-12 md:h-12 w-8 h-8 " />
              </span>
              <span className="absolute -top-8 md:-top-10 lg:right-[30%] md:right-[5%] right-[15%]">
                <img src={bulb} alt="" className="md:w-12 md:h-12 w-8 h-8 " />
              </span>
            </h1>

            <p className="lg:pr-32 text-gray-200 my-4">
              Participate in getlinked tech Hackathon 2023 and stand a chance to
              win a Big prize
            </p>
            <button className="w-fit bg-gradient-to-r text-white text-base px-9 rounded-sm py-2 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out">
              Register
            </button>

            <div className=" md:mt-6 flex justify-center md:justify-start gap-x-3.5 font-unicaOne text-3xl ">
              <TImer duration={2 * 24 * 60 * 60 * 10000} />
              {/* <h3 className="">
                00<sub className="text-sm">H</sub>
              </h3>
              <h3 className="">
                00<sub className="text-sm">M</sub>
              </h3>
              <h3 className="">
                00<sub className="text-sm">S</sub>
              </h3> */}
            </div>

            <span className="absolute md:right-36 lg:bottom-36 md:bottom-10 right-10 ">
              <img
                src={starGray}
                alt=""
                className="blink-animation rotate-90 w-5"
              />
            </span>

            <div className=" pt-20 pl-48 md:block hidden">
              <img
                src={starWhite}
                alt=""
                className="blink-animation rotate-90 w-5"
              />
            </div>
          </div>

          <div data-aos="" className="md:w-1/2 w-full relative self-end ">
            <span className="absolute -top-24 md:-top-0 left-80 md:left-0">
              <img
                src={starGray}
                alt=""
                className="shine-animation rotate-90 w-5"
              />
            </span>
            <img src={showImageMain} alt="" className="w-full" />
            <span className="absolute top-0 left-0 w-[85%] opacity-75">
              <img src={ShowImageInner} alt="" className="spin" />
            </span>
            <span className="absolute -top-14 -right-0 z-20">
              <img src={purpleFlare} alt="" className="w-[100%]" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
