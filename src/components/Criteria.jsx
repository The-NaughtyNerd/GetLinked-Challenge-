import {
  criteraImg,
  ellipse,
  purpleFlare,
  starGray,
  starPurple,
  starWhite,
} from '../assets';

const Criteria = () => {
  const criterias = [
    {
      title: 'Innovation and Creativity',
      explanation:
        'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
    },
    {
      title: 'Functionality',
      explanation:
        'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.',
    },
    {
      title: 'Impact and Relevance',
      explanation:
        'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.',
    },
    {
      title: 'Technical Complexity',
      explanation:
        'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.',
    },
    {
      title: 'Adherence to Hackathon Rules',
      explanation:
        'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.',
    },
  ];

  return (
    <>
      <div className="relative md:px-4 lg:px-10 flex md:flex-row flex-col items-center pt-16 md:space-x-16 font-montserrat border-b-[0.5px] border-gray-500 pb-8 w-full">
        <div className="md:w-[45%] w-full relative mx-auto px-7 md:px-0 pt-9">
          <span className="md:w-full w-1/2 absolute md:left-36 md:-top-10">
            <img
              src={starPurple}
              alt="starPurple"
              className="w-5 shine-animation"
            />
          </span>

          <div className="bounce-animation">
            <span className="hidden md:block absolute -z-20 left-24 -top-1">
              <img src={ellipse} alt="ellipse" className="w-[80%]" />
            </span>

            <img
              src={criteraImg}
              alt="criteria-image"
              className="object-contain "
            />
          </div>

          <span className="absolute right-0">
            <img
              src={starWhite}
              alt="star-white"
              className=" w-5 rotate-90 blink-animation"
            />
          </span>
        </div>

        <div className="md:w-[55%] w-full relative pt-10 px-7 md:px-0 text-center md:text-start">
          <h1 className="text-4xl font-bold font-clashDisplay text-white">
            Judging Criteria <br className="md:block hidden" />
            <span className="text-primary">Key attributes</span>
          </h1>

          <article className="text-gray-200 pr-2">
            {criterias.map((criteria, idx) => (
              <p key={idx} className="pt-3 text-[10px]">
                <span className="text-[#ff26b9] font-bold">
                  {criteria.title}
                </span>
                : {criteria.explanation}
              </p>
            ))}

            <button className="mt-6 w-fit bg-gradient-to-r text-white text-base px-9 rounded-sm py-2 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out">
              Read More
            </button>

            <span className="-z-20  absolute -bottom-0 right-0">
              <img
                src={purpleFlare}
                alt="purpleFlare"
                className="w-[100%] animate-pulse"
              />
            </span>
          </article>
        </div>

        <span className="-z-20 absolute -bottom-24 -left-36">
          <img
            src={purpleFlare}
            alt="purpleFlare"
            className="w-[65%] animate-pulse"
          />
        </span>
      </div>
    </>
  );
};

export default Criteria;
