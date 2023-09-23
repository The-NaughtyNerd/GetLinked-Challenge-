import { useEffect, useState } from 'react';
import {
  confirm,
  purpleFlare,
  regImg,
  starGray,
  starPurple,
  starWhite,
  successImg,
} from '../../assets';
import { numberOfGroup } from '../../constants';

const Register = () => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [teamName, setTeamName] = useState('');
  // const [groupSize, setGroupSize] = useState('');
  const [projectTopic, setProjectTopic] = useState('');
  const [categorySelectedOption, setCategorySelectedOption] = useState(null);
  const [selectedGroupSize, setSelectedGroupSize] = useState(null);
  const [hideSuccess, setHideSuccess] = useState(false);

  useEffect(() => {
    fetchCategory();
  });

  const fetchCategory = async () => {
    try {
      const res = await fetch(
        `https://backend.getlinked.ai/hackathon/categories-list`
      );

      if (!res.ok === 200) throw new Error(`Couldn't fetch API`);

      const data = await res.json();
      // console.log(data);

      setCategoriesOptions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategory = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setCategorySelectedOption(selectedValue);
  };

  const handleGroupSize = (e) => {
    e.preventDefault();

    const selectedValue = e.target.value;
    setSelectedGroupSize(selectedValue);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email: email,
      phone_number: phoneNumber,
      team_name: teamName,
      group_size: selectedGroupSize,
      project_topic: projectTopic,
      category: categorySelectedOption,
      privacy_policy_accepted: true,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://backend.getlinked.ai/hackathon/registration', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setHideSuccess(true);
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <>
      <div className="font-montserrat text-white relative">
        <div className={`${hideSuccess === false ? 'hidden' : ''} `}>
          <div className={` modal border-primary border p-8`}>
            <div className="flex justify-center pl-20">
              <span className="absolute -z-10 md:left-[14%] md:top-[2%] left-[19%] top-7">
                <img
                  src={confirm}
                  alt="confirm-img"
                  className="lg:w-60 md:w-56 w-full"
                />
              </span>
              <img src={successImg} alt="success-img" />
            </div>
            <div className="pt-4">
              <h1 className="md:text-2xl text-center font-medium text-2xl">
                Congratulations <br />
                you have successfully Registered!
              </h1>
              <p className="text-center text-base pt-3">
                Yes, it was easy and you did it!
              </p>
              <p className="text-center text-base pt-1">
                check your mail box for next step{' '}
              </p>
            </div>

            <button
              onClick={() => setHideSuccess(false)}
              className="w-full bg-gradient-to-r text-white text-base px-9 rounded-sm py-2.5 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out mt-4"
            >
              Back
            </button>
          </div>
          <div className="overlay "></div>
        </div>
        <div className="relative flex flex-col lg:flex-row items-center justify-around px-8 lg:py-14 py-8">
          <h1 className="self-start lg:hidden text-primary font-bold text-xl">
            Register
          </h1>

          <div className="relative lg:w-1/2 w-full">
            <span className="absolute top-0 left-[15%] ">
              <img src={starPurple} alt="" className="shine-animation w-5" />
            </span>
            <span className="absolute -left-[25%] -top-[25%] -z-50">
              <img src={purpleFlare} alt="" className="w-[85%] animate-pulse" />
            </span>

            <img
              src={regImg}
              alt="Designer seating"
              className="lg:w-full w-[70%] mx-auto lg:mx-0"
            />

            <span className="absolute bottom-[15%] right-[15%]">
              <img src={starPurple} alt="" className="blink-animation w-5" />
            </span>
            <span className="absolute bottom-[5%] left-[15%]">
              <img
                src={starGray}
                alt=""
                className="shine-animation w-5 rotate-90"
              />
            </span>
          </div>

          <div className="relative lg:w-1/2 w-full  p-2 lg:p-10 form ">
            <div className="mb-8">
              <h1 className="hidden lg:block text-primary font-bold text-4xl">
                Register
              </h1>
              <p className="mt-8 mb-3">Be part of this movement!</p>
              <h1 className="uppercase font-semibold text-2xl">
                Create your account
              </h1>
            </div>

            <form
              onSubmit={formSubmit}
              className="w-full grid grid-cols-2 gap-x-4 gap-y-4 lg:gap-y-6"
            >
              <div className="flex flex-col gap-y-1.5 lg:col-span-1 col-span-full">
                <label htmlFor="teamName">Team's Name</label>
                <input
                  type="text"
                  className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary"
                  id="teamName"
                  onChange={(e) => {
                    const value = e.target.value;
                    setTeamName(value);
                  }}
                  required
                  placeholder="Enter the name of your group"
                />
              </div>

              <div className="flex flex-col gap-y-1.5 lg:col-span-1 col-span-full">
                <label htmlFor="phoneNo">Phone</label>
                <input
                  type="tel"
                  className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setPhoneNumber(value);
                  }}
                  id="phoneNo"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-y-1.5 lg:col-span-1 col-span-full">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                  }}
                  className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Project Topic */}
              <div className="flex flex-col gap-y-1.5 lg:col-span-1 col-span-full">
                <label htmlFor="projectTopic">Project Topic</label>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setProjectTopic(value);
                  }}
                  className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary"
                  id="projectTopic"
                  placeholder="What is your group project topic"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-y-1.5">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  onChange={handleCategory}
                  className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary"
                >
                  <option value="" className="bg-prizeBgCOlor text-white">
                    Select your category
                  </option>
                  {categoriesOptions.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                      className="bg-prizeBgCOlor text-white"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Group size */}
              <div className="flex flex-col gap-y-1.5">
                <label htmlFor="groupSize">Group Size</label>
                <select
                  required
                  name="groupSize"
                  id="groupSize"
                  onChange={handleGroupSize}
                  className="input text-sm outline-none py-2.5 focus:border px-3 focus:border-primary"
                >
                  <option value="" className="bg-prizeBgCOlor text-white">
                    Select
                  </option>
                  {numberOfGroup.map((numb) => (
                    <option
                      key={numb.id}
                      value={numb.num}
                      className="bg-prizeBgCOlor text-white"
                    >
                      {numb.num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-full">
                <p className="text-pinkPrimary italic text-xs">
                  Please review your registration details before submitting
                </p>
              </div>

              <div className="col-span-full flex align-center gap-x-2">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  required
                  className="border rounded-sm bg-transparent checked:border-primary"
                />
                <label htmlFor="agreement" className="text-xs">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r text-white text-base px-9 rounded-sm py-2 from-[#ff26b9] via-[#fe34b9] to-[#903aff] font-montserrat hover:from-[#903aff] hover:to-[#ff26b9] transition-all ease-out"
                >
                  Register Now
                </button>
              </div>
            </form>

            <span className="absolute top-4 left-[70%]">
              <img
                src={starGray}
                alt=""
                className="rotate-90 w-5 blink-animation"
              />
            </span>
          </div>

          <span className="absolute bottom-0 -right-[45%] -z-50">
            <img src={purpleFlare} alt="" className="w-[100%] animate-pulse" />
          </span>

          <span className="absolute bottom-[5%] right-[5%]">
            <img
              src={starWhite}
              alt=""
              className="shine-animation w-5 rotate-90"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
