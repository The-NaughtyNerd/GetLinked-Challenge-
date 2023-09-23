import {
  bronze,
  gold,
  prizeImg,
  purpleFlare,
  purpleFlareHalf,
  silver,
  starPurple,
  starWhite,
} from '../assets';

const Prizes = () => {
  return (
    <>
      <div className="md:px-4 lg:px-20 bg-prizeBgCOlor  pt-16 font-montserrat text-white pb-8 w-full">
        <div className="relative md:w-full w-[90%] md:ml-auto mx-auto ">
          <div className="md:absolute md:w-[40%] md:right-0 text-center md:text-left">
            <h1 className="text-4xl font-bold font-clashDisplay">
              Prizes and <br className="md:block hidden" />
              <span className="text-primary">Rewards</span>
            </h1>
            <p className="">
              Highlight of the prizes or rewards for winners and for
              participants
            </p>
          </div>
          <span className="absolute left-0 -top-24">
            <img
              src={purpleFlare}
              alt=""
              className="animate-pulse md:w-[70%] w-full"
            />
          </span>
        </div>

        <div className="relative md:pt-20 flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-1/2 w-full">
            <img
              src={prizeImg}
              alt="Trophy Prize"
              className="w-full bounce-animation"
            />
          </div>

          <div className=" md:w-1/2 w-full mt-28 md:px-0 px-6">
            {/* Awards */}
            <div className=" flex justify-between md:gap-x-6 gap-x-3">
              <div className="relative w-1/3 border pt-10 lg:pt-16  bg-purplePrimary border-[#D434FE] rounded-md h-fit">
                <div className="absolute lg:-top-16 lg:left-8 -top-10 left-6">
                  <img src={silver} alt="" className="w-[80%]" />
                </div>
                <div className="h-full flex justify-center items-end lg:pb-8 pb-4">
                  <h3 className="text-center font-semibold text-xl lg:text-2xl">
                    2nd
                    <br />
                    <span className="text-lg">Runner</span>
                    <br />
                    <span className="text-primary">N300,000</span>
                  </h3>
                </div>
              </div>

              <div className="relative w-1/3 border h-fit pt-14 lg:pt-24 bg-purpleSecondary border-[#903AFF] rounded-md">
                <div className="w-fit absolute lg:-top-24 -top-16">
                  <img src={gold} alt="" className="" />
                </div>

                <div className="h-full flex justify-center items-end lg:pb-8 pb-4">
                  <h3 className="text-center font-semibold text-xl lg:text-2xl ">
                    1st
                    <br />
                    <span className="text-lg">Runner</span>
                    <br />
                    <span className="text-[#903AFF]">N400,000</span>
                  </h3>
                </div>
              </div>

              <div className="relative w-1/3 border h-fit pt-10 lg:pt-16 bg-purplePrimary border-[#D434FE] rounded-md">
                <div className="absolute lg:-top-16 lg:left-8 -top-10 left-6">
                  <img src={bronze} alt="" className="w-[80%]" />
                </div>
                <div className="h-full flex justify-center items-end lg:pb-8 pb-4">
                  <h3 className="text-center font-semibold text-xl lg:text-2xl">
                    3rd
                    <br />
                    <span className="text-lg">Runner</span>
                    <br />
                    <span className="text-primary">N150,000</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <span className="absolute z-10 -right-10 top-[40%]">
            <img
              src={starWhite}
              alt=""
              className="w-5 blink-animation rotate-90"
            />
          </span>

          <span className="absolute md:-bottom-96 -bottom-28 lg:-right-48 md:-right-32 -right-48 z-10">
            <img
              src={purpleFlareHalf}
              alt="flare"
              className=" md:w-[70%] w-1/2 animate-pulse"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Prizes;
