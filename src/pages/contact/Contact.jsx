import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  backButton,
  fb,
  instagram,
  linkedin,
  purpleFlare,
  starGray,
  starPurple,
  starWhite,
  twitter,
} from '../../assets';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://backend.getlinked.ai/hackathon/contact-form`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            first_name: fullName,
            message: message,
          }),
        }
      );

      let resJson = await res.json();
      console.log(res, resJson);
      if (res.status === 201) toast.success(`Thank you for Contacting us`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row  text-white font-montserrat px-10 lg:px-20 lg:py-14  pb-20 h-full relative">
        <Link to="/">
          <span className="absolute left-[5%] top-0 border p-2 rounded-full border-primary lg:hidden">
            <img src={backButton} alt="" className="w-4 h-4" />
          </span>
        </Link>

        <span className="absolute top-20 left-[7%]">
          <img src={starPurple} alt="" className="shine-animation w-5" />
        </span>

        <div className="relative lg:w-1/2 w-full text-base text-start">
          <span className="absolute -top-[60%] -left-[35%] -z-50">
            <img src={purpleFlare} alt="" className="w-[100%] animate-pulse" />
          </span>

          <div className="hidden lg:block">
            <h1 className="text-3xl font-bold font-clashDisplay text-primary">
              Get in touch
            </h1>
            <p className="pt-6">
              Contact <br />
              Information
            </p>
            <p className=" pt-6">
              27, Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
            <p className=" pt-6">Call Us: 07067981819</p>
            <p className=" pt-6">
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </p>
          </div>

          <div className="text-center lg:text-left space-y-2">
            <h5 className="text-primary font-medium pt-6">Share on</h5>
            <div className="flex flex-row justify-center lg:justify-start items-center gap-x-2">
              <div className="  cursor-pointer">
                <img src={instagram} alt="" className="" />
              </div>

              <div className=" cursor-pointer">
                <img src={twitter} alt="" className="" />
              </div>

              <div className="  cursor-pointer">
                <img src={fb} alt="" className="" />
              </div>

              <div className="  cursor-pointer">
                <img src={linkedin} alt="" className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative lg:w-1/2 w-full form md:p-16 mt-16 lg:mt-0">
          <h3 className="text-2xl font-bold font-clashDisplay text-primary ">
            Questions or need assistance? <br />
            Let us know about it!
          </h3>

          <p className="lg:hidden block mt-6">
            Email us below to any question related to our event
          </p>

          <form onSubmit={submitForm} className="grid grid-cols-1 gap-y-7 mt-7">
            <input
              type="text"
              onChange={(e) => {
                const value = e.target.value;
                setFullName(value);
              }}
              required
              placeholder="Name"
              className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary text-white"
            />

            <input
              type="email"
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
              }}
              required
              placeholder="Email"
              className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary text-white "
            />

            <textarea
              placeholder="Message"
              cols="5"
              required
              onChange={(e) => {
                const value = e.target.value;
                setMessage(value);
              }}
              rows="6"
              className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary  text-white"
            ></textarea>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className=" w-fit bg-gradient-to-r text-white text-base px-9 rounded-sm py-2 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out"
              >
                Submit
              </button>
            </div>
          </form>

          <span className="absolute -top-10 right-10">
            <img
              src={starGray}
              alt=""
              className="blink-animation rotate-90 w-5"
            />
          </span>

          <span className="absolute bottom-[20%] -left-2">
            <img src={starPurple} alt="" className="shine-animation w-5" />
          </span>

          <span className="absolute bottom-0 -right-10">
            <img
              src={starWhite}
              alt=""
              className="blink-animation rotate-90 w-5"
            />
          </span>
        </div>
        <span className="absolute -bottom-0 -right-[40%] -z-50">
          <img src={purpleFlare} alt="" className="w-[100%] animate-pulse" />
        </span>
      </div>
    </div>
  );
};

export default Contact;
