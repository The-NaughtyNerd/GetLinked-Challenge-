import React from 'react';
import { Link } from 'react-router-dom';
import { call, fb, instagram, linkedin, location, twitter } from '../assets';

const Footer = () => {
  return (
    <div className="bg-prizeBgCOlor py-10 md:px-20 px-7">
      <div className="flex md:flex-row flex-col justify-between font-montserrat space-y-4 md:space-y-0">
        <div className="md:w-1/2 w-full">
          <Link to="/">
            <h1 className="md:text-4xl text-3xl font-clashDisplay font-bold text-white">
              get<span className="text-primary"> linked</span>
            </h1>
          </Link>

          <p className="text-gray-200 text-base pt-3 ">
            Getlinked Tech Hackathon ia a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <div className="md:pt-16 pt-8">
            <h5 className="text-white text-sm font-medium">
              Terms of Use
              <span className="text-primary font-semibold text-xl h-30 px-3">
                |
              </span>
              Privacy Policy
            </h5>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:w-1/2 w-full space-y-5 md:space-y-0">
          <div className="md:w-1/2">
            <h3 className="text-lg text-primary font-semibold">Useful Links</h3>

            <Link to="/">
              <h5 className="text-white text-base pt-2">Overview</h5>
            </Link>

            <Link to="/">
              <h5 className="text-white text-base pt-2">Timeline</h5>
            </Link>

            <Link to="/">
              <h5 className="text-white text-base pt-2">FAQs</h5>
            </Link>

            <Link to="/">
              <h5 className="text-white text-base pt-2">Register</h5>
            </Link>

            <div className="flex flex-row  pt-2 items-center space-x-3">
              <h6 className="text-sm text-primary font-semibold">Follow us</h6>
              <div className="flex flex-row  items-center space-x-2">
                <div className="md:w-1/2  cursor-pointer">
                  <img src={instagram} alt="" className="" />
                </div>

                <div className="md:w-1/2 cursor-pointer">
                  <img src={twitter} alt="" className="" />
                </div>

                <div className="md:w-1/2  cursor-pointer">
                  <img src={fb} alt="" className="" />
                </div>

                <div className="md:w-1/2  cursor-pointer">
                  <img src={linkedin} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-lg text-primary font-semibold">Contact Us</h4>

            <div className="flex items-center space-x-3 pt-3">
              <img src={call} alt="" className="w-4" />

              <div>
                <h3 className="text-sm text-white">+234 6707653444</h3>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-4">
              <img src={location} alt="" className="w-4" />

              <div>
                <h3 className="text-sm text-white">
                  27, Alara Street <br />
                  Yaba 1000012 <br />
                  Lagos State
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-white text-sm pt-7">
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;
