import React from "react";

function Card2(props) {
  return (
    <>
      <div
        className="w-[18.8125rem] box-border p-4 overflow-x-hidden h-[28.375rem] relative rounded-xl"
        style={{
          backgroundImage: `url('${props.url}')`,
          backgroundPosition: "center",
        }}
      >
        <div className="text-[rgb(130, 130, 130)] font-bold text-[18px] text-white">
          {props.heading}
        </div>
        <div className="text-[15px] font-semibold text-white">
          {props.description}
        </div>
        {/* Second div with black background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black to-transparent opacity-[0.5]"></div>
      </div>
    </>
  );
}

export default Card2;