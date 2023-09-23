import {
  conditionImg,
  lock,
  purpleFlare,
  purpleFlareHalf,
  starGray,
  starPurple,
  starWhite,
} from '../assets';
import { conditions } from '../constants';

const TermsCondition = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center text-white font-montserrat lg:pt-24 md:pb-24 px-5 lg:px-20 ">
      <div className="lg:w-1/2 w-full relative md:pt-32 pt-20">
        <h1 className="text-4xl lg:text-start text-center font-clashDisplay font-bold ">
          Privacy Policy and <br className="lg:flex hidden" />
          <span className="text-primary">Terms</span>
        </h1>
        <span className="absolute top-0 right-[35%]">
          <img
            src={starGray}
            alt="star-gray"
            className="w-5 rotate-90 shine-animation"
          />
        </span>
        <span className="absolute bottom-36 -left-10">
          <img
            src={starPurple}
            alt="star-purple"
            className="w-5 blink-animation"
          />
        </span>

        <p className="text-sm text-gray-200 py-5 lg:text-start text-center">
          Last updated on September 12, 2023
        </p>

        <p className="text-base text-white pb-7 lg:text-start text-center">
          Below are our privacy & policy, which outline a lot of goodies.
          <br className="md:flex hidden" /> it's our aim to always think of our
          participant.
        </p>

        <div className="border border-primary bg-prizeBg rounded-md md:p-14 p-5 pt-10">
          <p className="text-base leading-7 md:text-start text-center">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>

          <h3 className="pt-4 pb-2 text-base text-primary font-semibold">
            Licensing Policy
          </h3>
          <h2 className="font-medium text-base text-white">
            Here are terms of our Standard License:
          </h2>

          <div>
            {conditions.map((item) => (
              <div
                key={item.id}
                className="flex flex-row items-start space-x-4 pt-5"
              >
                <img src={item.img} alt="" />
                <div>
                  <p className="text-sm">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-9">
            <button className="w-fit bg-gradient-to-r text-white text-base px-12 rounded-sm py-3 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative pt-32">
        <span className="absolute left-[80%] md:left-[65%]">
          <img
            src={starWhite}
            alt="star-white"
            className="w-3 rotate-90 blink-animation"
          />
        </span>
        <span className="absolute left-[30%] top-[75%]">
          <img
            src={starWhite}
            alt=""
            className="w-3 rotate-90 shine-animation"
          />
        </span>
        <span className="absolute top-24 left-4">
          <img src={starPurple} alt="" className="w-4 blink-animation " />
        </span>
        <span className="absolute left-[30%] top-[60%]">
          <img src={starPurple} alt="" className="w-4 blink-animation " />
        </span>
        <span className="absolute right-0 md:right-[10%] top-[80%]">
          <img
            src={starGray}
            alt=""
            className="w-4 rotate-90 blink-animation"
          />
        </span>

        <div className="bounce-animation">
          <span className="absolute lg:-top-3 lg:-right-10 -z-10 top-7 left-24">
            <img src={lock} alt="" className="md:w-[70%] w-60" />
          </span>
          <div className="flex justify-center">
            <img src={conditionImg} alt="" className="lg:w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
