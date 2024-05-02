import React from "react";

const myhero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-96 m-20">
        <div className="w-60 h-6 font-medium text-slate-200">
          Start your AI journey with us
        </div>
        <div className="font-inter font-medium text-4xl leading-58 text-center mt-4 text-slate-200">
          Your Go-To AI Consultancy For
        </div>
        <div className="font-inter font-medium text-4xl leading-58 text-center text-blue-900">
          AI Solutions
        </div>
        <div>
          <div className="flex justify-center gap-5 mt-5">
            <button className="border hover:bg-blue-500 border-blue-600 rounded-md  text-slate-200 p-2">
              Book a call
            </button>
            <button className="border px-2 bg-gray-300 ml-2 border-blue-600 rounded-md p-1">
              See Case Studies
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center absolute bottom-9 right-0">
        <div className="inset-0 bg-gradient-to-br w-fit from-blue-500 to-black p-2 rounded-full -mr-2 z-10">
          <img
            className="h-12 "
            src="https://s3-alpha-sig.figma.com/img/6287/d4fa/98e6e64aa9f2a7070cc843ad5c89cf71?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIKc2SgxEu36Wo97a333MX7PYk3aez7xVHNsQjwUMM2j7yOUpahF9nV9FfKJXJkmyFfUX4TFZ-XOfwsyuCO5Uwph8l0oNcG2dGLU7f~uyWh0SUCy-glucPvlP3pOyJzHpp74N0eYbU32TzvYV0tZXj1Me4YKiCsIN36mw3dgPJS23vwAmopXJA2So7Se9dXZLJ03N09q8w7AoLSgInggY3uF6F7c4iiTbR8UxIGNMZYm0b9WqGwUSdA1QxwRlf5xNeZEIrpX8mZUzGhIfTJtRido4AiSB25fCphORCS3eU1kVWJqIWFb2Vtja9ucnN5EQWxZMjqegidC7kQeMprjUg__"
            alt=""
          />
        </div>
        <div
          className="flex justify-center items-center
      bg-gradient-to-br z-0 from-blue-500 h-fit py-2.5 pr-4 font-semibold px-4 rounded-r-lg text-white to-black
      "
        >
          Contact us
        </div>
      </div>
    </>
  );
};

export default myhero;
