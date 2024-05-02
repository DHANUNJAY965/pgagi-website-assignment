import React from "react";

function Card3(props) {
  return (
    <div className="">
      <div
        className="rounded-xl w-[329px] h-[197px]"
        style={{
          backgroundImage: ` url('${props.url}') `,
          backgroundPosition: "center",
          backgroundSize: '100% 100%',
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text-[18px] text-slate-100 font-semibold">Data is better together</div>
      <div className="text-[12px] text-slate-100">Published Marc 24,2024</div>
    </div>
  );
}

export default Card3;