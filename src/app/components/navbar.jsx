

import React, { useState } from "react";
import Calendlylink from "../buttons/callbutton";
import hi from "../images/pgagi.png"
// import Link from "next/link";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showIndustries, setShowIndustries] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showAIResources, setShowAIResources] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navi = useNavigate();

  const toggleIndustries = () => {
    setShowIndustries(!showIndustries);
    setShowAboutUs(false); // Close About Us section
    setShowSolutions(false); // Close Solutions section
    setShowAIResources(false); // Close AI Resources section
    setSelectedOption("Industries");
  };

  const toggleAboutUs = () => {
    if (!showAboutUs) {
      setShowAboutUs(true);
      setShowIndustries(false); // Close Industries section
      setShowSolutions(false); // Close Solutions section
      setShowAIResources(false); // Close AI Resources section
      setSelectedOption("What we do");
    }
  };

  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
    setShowIndustries(false); // Close Industries section
    setShowAboutUs(false); // Close About Us section
    setShowAIResources(false); // Close AI Resources section
    setSelectedOption("What we think");
  };

  const toggleAIResources = () => {
    setShowAIResources(!showAIResources);
    setShowIndustries(false); // Close Industries section
    setShowAboutUs(false); // Close About Us section
    setShowSolutions(false); // Close Solutions section
    setSelectedOption("Who we are");
  };

  return (
    <div className="sticky top-0 z-20"
    style={{background:'rgba(0, 0, 0, 0.801)'}}>
      {/* className="sticky top-0 z-[1]" */}
      {/* Thin horizontal blue line */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
          backgroundColor: "#14213d",
          width: "100%",
        }}
      >
        
        <span style={{ marginRight: "10px" }} className="text-white">
          AI Calling Agent
        </span>
        <div>
          <a
            href="/aboutus"
            style={{ fontWeight: "bold" }}
            className="text-white"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className=" border-b-2 h-24 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24">
        {/* Logo */}
        <div className="flex items-center justify-center xl:pl-16 md:pl-10">
          <div className="flex-shrink-0  ">
            <img
              src={hi}
              alt="Company logo"
              className="h-14 object-contain cursor-pointer hover:border-[#14213d]"
              width={60}
              height={60}
              onClick={()=>
              {
                navi("/")
              }}
            />
          </div>
          <div className="text-3xl font-bold ml-2">PG-AGI</div>
        </div>
        {/* Navbar links */}
        <div className="header-links contents font-semibold text-base lg:text-base text-white">
          <ul className="flex items-center ml-4  lg:ml-5 xl:ml-2 lg:mr-8">
            <li className="p-2.5 xl:p-6 text-center"></li>
            <li className="p-2.5 xl:p-6">
              <button
                onMouseEnter={() => toggleSolutions("Solutions")}
                className="focus:outline-none flex items-center"
              >
                <span
                  className={
                    selectedOption === "Solutions"
                      ? "text-[#14213d] "
                      : "cursor-pointer "
                  }
                >
                  What we do
                </span>
              </button>
            </li>
            <li className="p-2.5 xl:p-6">
              
                <span
                  className="cursor-pointer"
                  onClick={()=>
                    navi("/think")
                  }
                >
                  What we think
                </span>
              
            </li>
            <li className="p-2.5 xl:p-6">
              <button
                onMouseEnter={() => toggleAboutUs("About Us")}
                className="focus:outline-none flex items-center"
              >
                <span
                  className=''
                >
                  who we are
                </span>
              </button>
            </li>
            <li className="p-2.5 xl:p-6 cursor-pointer ">
              <span className="box-border absolute w-[116] h-[35] left-1073 top-14 border border-solid hover:bg-blue-600 border-blue-600 rounded-md p-2">
                Contact us
              </span>
            </li>
          </ul>
        </div>
        {/* Search bar and button */}
        {/* <div >
                    
                    <Calendlylink/>
                </div> */}
      </div>

      {/* AI Resources Section */}
      {showAIResources && (
        <div
          className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-6"
          onMouseLeave={() => setShowAIResources(false)}
        >
          <div
            className="text-gray-600 body-font mt-0 flex flex-wrap justify-center"
            style={{ width: "80%", height: "280px", overflow: "hidden" }}
          >
           
            <div
              className="py-6 px-6 flex items-start w-full md:w-1/3"
              style={{ position: "relative" }}
            >
              <div
                className="h-full flex-grow flex flex-col"
                style={{ width: "100%", height: "100%" }}
              >
                <div
                  className="hover:bg-[#F5F6FC]  mb-6 group"
                  style={{ width: "100%" }}
                >
                  <div className="flex items-center">
                    <h1
                      className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3"
                      style={{ marginRight: "10px" }}
                    >
                      {" "}
                      Blog
                    </h1>
                    <img
                      src="/images/rightarrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      style={{ transition: "transform 0.1s" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">
                    Articles and Stories
                  </p>
                </div>
                
              </div>
              {/* Vertical Line */}
              {/* <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div> */}
            </div>
            <div className="py-6 px-6 flex items-start hover:bg-[#F5F6FC]  mb-6 group w-full md:w-1/3">
              {/* <div className="h-full flex-grow" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                                <div className="flex items-center">
                                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>AI pilot</h1>
                                    <img
                                        src="/images/rightarrow.png"
                                        alt="Arrow"
                                        style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                        className='group-hover:translate-x-1'
                                    />
                                </div>
                                <p className="text-gray-600 hover:text-black    text-sm leading-relaxed mb-5">Your AI-UX Assistant</p>
                                <div style={{ position: 'relative', flex: '1', width: '100%' }}>
                                    <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
                                        <source src="https://www.datocms-assets.com/16499/1699230326-customws.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      )}

      {showSolutions && (
        <div
        style={{
          background: 'linear-gradient(to bottom right, #881ccb ,black , #34b0cb,#34b0cb )'
        }}
        
          className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24 py-4"
          onMouseLeave={() => setShowSolutions(false)}
        >
          <div
            className="text-gray-600 body-font mt-0 flex flex-wrap justify-center"
            style={{ width: "80%", maxHeight: "515px",  }}
          >
            <div className="flex items-start w-full md:w-1/3 relative">
              <div className="h-full flex-grow">
                <div className="hover:bg-[rgb(157,164,207)] hover:rounded-lg w-[120px] h-[42px] m-4 ">
                  <div className="flex items-center ml-5">
                    <h1 className="title-font text-md font-bold text-white hover:text-black mr-2 mt-2">
                      Solutions
                    </h1>
                  </div>
                </div>
                <div className="hover:bg-[#9da4cf] hover:rounded-lg w-[120px] h-[42px] m-4 ">
                  <div className="flex items-center ml-5">
                    <h1 className="title-font text-md font-bold text-white hover:text-black  mr-2 mt-2">
                      Industries
                    </h1>
                  </div>
                </div>

                <div className="hover:bg-[#9da4cf] hover:rounded-lg w-[120px] h-[42px] m-4 ">
                  <div className="flex items-center ml-5">
                    <div className="flex items-center">
                      <h1 className="title-font text-md font-bold text-white hover:text-black mr-2 mt-2">
                        Case Study
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div>{" "}
              {/* Vertical Line */}
            </div>
            <div className="py-4 px-4 flex items-start w-full md:w-1/3 relative">
              <div className="h-full flex-grow flex flex-col">
                <div className=" text-white">Chatbot Devlopment</div>
                <div className=" text-white mt-6">Chatbot Devlopment</div>
                <div className=" text-white mt-6">Voice bot Solutions</div>
                <div className=" text-white mt-6">Language Model Tuning</div>
                <div className=" text-white mt-6">Custom GPT Applications</div>
                <div className=" text-white mt-6">Algorithm Development</div>
                <div className=" text-white mt-6">Retrieval-Augmented Generation</div>
                <div className=" text-white mt-6">Machine Learning Deployment</div>
                <div className=" text-white mt-6">Natural Language Processing</div>
              </div>
              {/* <div className="absolute h-full w-px bg-gray-200 top-0 right-0"></div>{" "}
              Vertical Line */}
            </div>
            <div className=" mt-[15px] ml-[10px] h-full flex-grow flex flex-col">
              <div className=" text-white">Supply Chain AI</div>
              <div className=" text-white mt-6">Market Research AI</div>
              <div className=" text-white mt-6">AI for Sustainability</div>
              <div className=" text-white mt-6">Prompt Engineering</div>
              <div className=" text-white mt-6">Predictive Analytics</div>
              <div className=" text-white mt-6">Financial Forecasting</div>
              <div className=" text-white mt-6">Business Automation</div>
            </div>
          </div>
          <div className=" mt-[15px] h-full flex-grow flex flex-col">
            <div className="text-white" >AI Training</div>
            <div className="text-white mt-6">Ethical AI</div>
            <div className="text-white mt-6">Data Mining</div>
            <div className="text-white mt-6">Healthcare AI</div>
          </div>
        </div>
      )}

      {/* Industries Section */}
      {showIndustries && (
        <div
          className="bg-white border-b-2 hidden md:flex md:flex-wrap md:justify-evenly md:px-8 lg:px-12 xl:px-24"
          onMouseLeave={() => setShowIndustries(false)}
        >
          <section className="text-gray-600 body-font mt-0 grid grid-cols-3 gap-x-40 gap-y-0 justify-center">
            {[
              "Fintech",
              "Chemical",
              "SaaS",
              "Edtech",
              "Health",
              "Commerce",
              "Security",
              "Blockchain",
              "Gaming",
              "Agritech",
              "Proptech",
              "Insurtech",
              "Biotech",
              "Cleantech",
              "Mobility",
              "Foodtech",
              "Medtech",
              "Legaltech",
            ].map((industry, index) => (
              <div
                key={index}
                className="py-1 px-4 flex items-start hover:bg-[#F5F6FC] mb-6 group"
              >
                <div className="h-full flex-grow">
                  <div className="flex items-center">
                    <h1 className="title-font text-md font-bold text-gray-600 hover:text-black mb-3">
                      {industry}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      {/* About Us Section */}
      {showAboutUs && (
        <div
          className="bg-white border-b-2 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24"
          onMouseLeave={() => setShowAboutUs(false)}
        >
          <section className="text-gray-600 body-font mt-0">
            <div className="container px-5 py-12 mx-auto">
              <div className="flex flex-wrap items-start justify-center -mx-8 -my-8">
                {/* <div className="py-8 px-8  flex items-start justify-center" style={{ marginLeft: '1rem', padding: '2rem', maxWidth: '400px', borderRadius: '8px' }} onMouseEnter={() => toggleAboutUs('Our core principles and beliefs')}>
                        <div className="h-full flex-grow">
                            <div className="flex hover:bg-[#F5F6FC]  mb-6 group items-center">
                                <h1 className="title-font text-md font-bold text-gray-600 hover:text-black     mb-3" style={{ marginRight: '10px' }}>Our Story and why Us</h1>
                                <img
                                    src="/images/rightarrow.png"
                                    alt="Arrow"
                                    style={{ width: '20px', height: '20px', transition: 'transform 0.1s' }}
                                    className='group-hover:translate-x-1'
                                />
                            </div>
                        </div>
                    </div> */}
                <div
                  className="py-8 px-8 flex items-start justify-center"
                  style={{
                    marginLeft: "1rem",
                    padding: "2rem",
                    maxWidth: "400px",
                    borderRadius: "8px",
                  }}
                  onMouseEnter={() =>
                    toggleAboutUs("Our core principles and beliefs")
                  }
                >
                  <div className="h-full flex-grow">
                    <div className="flex hover:bg-[#F5F6FC] mb-6 group items-center">
                      <a
                        href="/aboutus"
                        className="title-font text-md font-bold text-gray-600 hover:text-black mb-3"
                        style={{ marginRight: "10px" }}
                      >
                        Our core principles and beliefs
                      </a>
                      <img
                        src="/images/rightarrow.png"
                        alt="Arrow"
                        width={20}
                        height={20}
                        style={{ transition: "transform 0.1s" }}
                        className="group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
