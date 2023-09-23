import React, { useRef, useState } from 'react';
import { faqImg, starGray, starPurple, starWhite } from '../assets';
const faqsList = [
  {
    q: 'Can I work on a project I started before the hackathon?',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt officiis praesentium soluta omnis reiciendis voluptates maiores provident. Esse a adipisci amet eius similique cupiditate .',
  },
  {
    q: 'What happens if I need help during the hackathon?',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt officiis praesentium soluta omnis reiciendis voluptates maiores provident. Esse a adipisci amet eius similique cupiditate.',
  },
  {
    q: "What happen if I don't have an idea for a project?",
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt officiis praesentium soluta omnis reiciendis voluptates maiores provident. Esse a adipisci amet eius similique cupiditate.',
  },
  {
    q: 'Can I join a team or do I have to come with one?',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt officiis praesentium soluta omnis reiciendis voluptates maiores provident. Esse a adipisci amet eius similique cupiditate).',
  },
  {
    q: 'What happens after the hackathon ends',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt officiis praesentium soluta omnis reiciendis voluptates maiores provident. Esse a adipisci amet eius similique cupiditate.',
  },
  {
    q: 'Can I work on a project I started before the hackathon?',
    a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt officiis praesentium soluta omnis reiciendis voluptates maiores provident. Esse a adipisci amet eius similique cupiditate.',
  },
];

const FaqsCard = ({ faqsList, idx }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');
  // const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-1 overflow-hidden border-b border-primary"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer py-3.5 flex items-center justify-between text-lg text-white font-medium font-montserrat">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-primary ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-primary ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-200 font-montserrat">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div id="FAQs">
      <div className="flex lg:flex-row flex-col items-center w-full md:px-8 px-7 justify-between relative border-b-[0.5px] border-gray-500 ">
        <span className="absolute top-14 left-3">
          <img
            src={starPurple}
            alt="purple-star"
            className="w-5 blink-animation"
          />
        </span>
        <div className="lg:w-1/2 w-full font-montserrat py-6">
          <section className="leading-relaxed max-w-screen-xl mt-12 ">
            <div className="space-y-4 ">
              <h1 className="md:text-4xl text-3xl font-bold font-clashDisplay text-white lg:text-start text-center">
                Frequently Asked <br className="md:flex hidden" />
                <span className="text-primary">Questions</span>
              </h1>
              <p className="text-gray-200 lg:w-[80%] lg:text-start text-center">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              {faqsList.map((item, idx) => (
                <FaqsCard key={idx} idx={idx} faqsList={item} />
              ))}
            </div>
          </section>
        </div>
        <div className="lg:w-1/2 w-full relative pb-10 md:pb-0">
          <img
            src={faqImg}
            alt="Faq-img"
            className="md:pt-10 pt-3 bounce-animation"
          />
          <span className="absolute md:top-12 md:left-[50%] top-0 left-[50%]">
            <img
              src={starPurple}
              alt="purple-star"
              className="w-5 shine-animation"
            />
          </span>

          {/* near head */}
          <span className="absolute md:top-36 md:left-36 top-24 left-20">
            <img
              src={starPurple}
              alt="purple-star"
              className="w-4 blink-animation"
            />
          </span>
          <span className="absolute top-[55%] md:left-16 left-10">
            <img
              src={starGray}
              alt="purple-star"
              className="w-4 rotate-90 shine-animation"
            />
          </span>
          <span className="absolute md:bottom-5 md:right-24 right-20 bottom-9">
            <img
              src={starWhite}
              alt="purple-star"
              className="w-6 rotate-90 blink-animation"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
