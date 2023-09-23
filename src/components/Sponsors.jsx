import { sponsor1, sponsor2, sponsor3, sponsor4 } from '../assets';

const Sponsors = () => {
  return (
    <>
      <div className="md:px-4 lg:px-10  pt-16 font-montserrat text-white border-b-[0.5px] border-gray-500 pb-8">
        <div className="md:w-1/2 mx-auto text-center mb-10">
          <h1 className="text-4xl font-semibold font-clashDisplay">
            Partners and Sponsors
          </h1>
          <p className="">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        {/* Sponsors */}

        <div className="border border-[#D434FE] rounded-md p-10 w-[80%] mx-auto">
          <div className="flex items-center justify-around h:16 md:h-24 lg:h-32 my-4">
            <div className="flex justify-center">
              <img src={sponsor4} alt="" className="w-[75%]" />
            </div>
            <div className="vertical-line"></div>
            <div className="flex justify-center">
              <img src={sponsor1} alt="" className="w-[75%]" />
            </div>
            <div className="vertical-line"></div>
            <div className="flex justify-center">
              <img src={sponsor2} alt="" className="w-[75%]" />
            </div>
          </div>

          <div className="flex justify-around  w-full ">
            <div className="w-1/3 flex justify-start">
              <div className="horizontal-line "></div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="horizontal-line-c "></div>
            </div>
            <div className="w-1/3 flex justify-end">
              <div className="horizontal-line"></div>
            </div>
          </div>

          <div className="flex items-center justify-around h:16 md:h-24 lg:h-32 my-4">
            <div className="  flex justify-center ">
              <img src={sponsor3} alt="" className="w-[75%]" />
            </div>
            <div className=" vertical-line"></div>
            <div className=" flex justify-center">
              <img src={sponsor1} alt="" className="w-[75%]" />
            </div>
            <div className=" vertical-line"></div>
            <div className=" flex justify-center">
              <img src={sponsor2} alt="" className="w-[75%]" />
            </div>
          </div>
        </div>

        {/* <div className="border border-[#D434FE] rounded-md p-10 w-[80%] mx-auto grid grid-cols-3 items-center justify-center content-center justify-items-center">
          <div className="px-6 py-3 w-full ">
            <div className="flex justify-center pb-12 border-b-2 border-[#D434FE]">
              <img src={sponsor2} alt="" className="w-[30%]" />
            </div>
          </div>

          <div className="px-6 py-3 w-full border-x-2 h-[70%] border-[#D434FE]">
            <div className="flex justify-center pb-16 border-b-2 border-[#D434FE]">
              <img src={sponsor1} alt="" className="w-[50%]" />
            </div>
          </div>

          <div className="px-6 py-3 w-full ">
            <div className="flex justify-center  pb-12 border-b-2 border-[#D434FE]">
              <img src={sponsor2} alt="" className="w-[30%]" />
            </div>
          </div>

          <div className="px-6 py-3 w-full ">
            <div className="flex justify-center">
              <img src={sponsor3} alt="" className="w-[30%]" />
            </div>
          </div>

          <div className="px-6 py-3 w-full border-x-2 h-[70%] flex justify-center border-[#D434FE]">
            <div className="w-[40%]">
              <h1 className="text-center">
                <span className="">Pay</span>box
              </h1>
            </div>
          </div>

          <div className="px-6 py-3 w-full flex justify-center">
            <div className="w-[40%]">
              <h1 className="">
                Vuzual{' '}
                <span className="">
                  Plus
                  <br />
                  Design Studios
                </span>
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sponsors;
{
  /* <div className="border border-primary rounded-md p-10 w-[80%] mx-auto space-y-6">
          <div className="flex gap-32 justify-center items-center h-20">
            <div className=" border-primary border-r-2 h-[70%]">
              <img src={sponsor2} alt="" className="w-[70%] mx-auto " />
            </div>
            <div className="">
              <img src={sponsor1} alt="" className="w-[70%] mx-auto " />
            </div>
            <div className="border-primary border-l-2 h-[70%]">
              <img src={sponsor2} alt="" className="w-[70%] mx-auto" />
            </div>
          </div>

          <div className="flex gap-32 justify-center items-center h-20">
            <div className="border-primary border-r-2 h-[70%]">
              <img src={sponsor2} alt="" className="w-[70%] mx-auto" />
            </div>
            <div className="border-primary border-t-2 pt-16">
              <img src={sponsor1} alt="" className="w-[70%] mx-auto " />
            </div>
            <div className="border-primary border-l-2 h-[70%]">
              <img src={sponsor2} alt="" className="w-[70%] mx-auto" />
            </div>
          </div>j
        </div> */
}
