import React from 'react';
import { timeline } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { starGray, starPurple, starWhite } from '../assets';
// import "react-vertical-timeline-component/"

// const TimelineCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement date={experience.date} dateClassName="date">
//       <div>
//         <h3>{experience.title}</h3>
//       </div>
//     </VerticalTimelineElement>
//   );
// };

const Timeline = () => {
  return (
    <>
      <div id="timeline">
        <div className="font-montserrat pt-20">
          <h1 className="text-center text-4xl font-clashDisplay text-white font-bold">
            Timeline
          </h1>
          <p className="text-center text-gray-200">
            Here is the breakdown of the time we anticipate{' '}
            <br className="md:flex hidden" />
            using for the upcoming event.
          </p>

          <div className="mt-12 relative">
            <span className="absolute top-0 md:left-24 lg:left-[20%] left-20">
              <img
                src={starPurple}
                alt="purple"
                className="w-4 shine-animation"
              />
            </span>

            <span className="absolute md:top-[36%] top-[43%] right-[20%]">
              <img
                src={starWhite}
                alt="starWhite"
                className="rotate-90 w-5 blink-animation"
              />
            </span>
            <span className="absolute lg:bottom-[12%] lg:left-40 md:bottom-10 bottom-5 left-2">
              <img
                src={starGray}
                alt="starWhite"
                className="rotate-90 w-5 shine-animation"
              />
            </span>
            <VerticalTimeline
              lineColor=" #D434FE"
              animate={true}
              // layout="2-columns"
            >
              {timeline.map((occasion) => (
                <VerticalTimelineElement
                  key={occasion.id}
                  date={occasion.date}
                  textClassName=""
                  // dateClassName={}
                  iconStyle={{
                    outlineColor: '#111',
                    background:
                      'linear-gradient(270deg, #903AFF 0%, #D434FE 100%)',
                    boxShadow: 'none',

                    // margin: '20px',
                  }}
                  contentStyle={{
                    background: 'none',
                    boxShadow: 'none',
                  }}
                  contentArrowStyle={{ border: 'none' }}
                  icon={
                    <div className="flex justify-center pt-2 items-center lg:pt-4 md:pt-1">
                      <p className="text-center md:text-2xl font-semibold text-white">
                        {occasion.id}
                      </p>
                    </div>
                  }
                  dateClassName="dateContent"
                >
                  <div>
                    <h3 className="text-primary font-bold text-lg ">
                      {occasion.title}
                    </h3>
                    <p className="text-gray-200 text-sm ">{occasion.details}</p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
