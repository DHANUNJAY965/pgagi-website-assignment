import React from "react";
import '../index.css'
function Phases({ contentone, contentwo, number }) {
  if (number === 8) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          className="relative w-[1065px] h-[560px] border flex flex-col justify-center items-center"
          style={{ borderRadius: "20px" }}
        >
          <div className="font-inter font-medium text-4xl leading-70 text-center bg-clip-text text-slate-500 z-10">
            {contentone}
          </div>
          <div className="font-inter font-medium text-4xl leading-70 text-center bg-clip-text text-slate-500 z-10">
            {contentwo}
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/ef82/1c19/04738357cafa3980e87eaf9c412599e5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6-hxrm3dC9ytRY1bC5BRnJzO5LNWSt-gF5Jjgc5EZL4eqLdAuhUyaIYq5sBsdUmU7nueVNKDQbFeGCh9lTXjnM~akDdv6m7lkllUTo~~Gc2TWkq86qs8FzTOd5MuQGGO6q3w7peWUkQA-FR6kkxGNKdFXyJS7pLyAi5K3heMJOldwzkiIfWuv0RXc~g7Uhd-QNq~BKg4N9Fpd8U2woMcBAb~fzORBew5cpocn1hs4SWlsLy40ulCh73zds6O9X0VGSTBHdoo0GEDeUfX6jN8LVFu~z7WwIKHIUbAD8vuggDL~jOKKxfcT3rdit0meAYCsPSLRiiptwXzEikQe6Zhg__"
            alt="Rotating Image"
            className="absolute animreq w-[320px] h-[310px]"
          />
        </div>
      </div>
    );
  }

  const isOdd = number % 2 !== 0;

  const imageStyle = isOdd
    ? `absolute w-[320px] h-[310px] left-[0px] top-[50%] transform -translate-y-1/2 animate-custom-ping`
    : `absolute w-[320px] h-[310px] right-[-110px] top-[50%] transform -translate-y-1/2 animate-bounce`;

  const containerStyle =
    "relative w-[1065px] h-[560px] border flex flex-col justify-center items-center overflow-hidden";

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen  ">
        <div className={containerStyle} style={{ borderRadius: "20px" }}>
          
            {isOdd ? (
              <>
                <span className="absolute top-16 left-[780px] text-white ">
                  <span className="font-inter font-bold text-5xl leading-76 text-center">
                    <span className="bg-gradient-to-r from-[#A0A3F6] to-[#FFFFFF] text-transparent bg-clip-text">
                      PHASE
                    </span>
                  </span>
                </span>
                <span className="absolute top-[-38px] left-[900px] text-white ">
                  <span className="font-inter font-extrabold text-9xl leading-[242.05px] text-center text-white bg-opacity-6">
                    <span className="bg-gradient-to-r from-[#A0A3F6] to-[#FFFFFF] text-transparent bg-clip-text opacity-[0.2] ">
                      {number}
                    </span>
                  </span>
                </span>
              </>
            ) : (
              <>
              <span className="absolute top-16 right-[850px] text-white ">
                  <span className="font-inter font-bold text-5xl leading-76 text-center">
                    <span className="bg-gradient-to-r from-[#A0A3F6] to-[#FFFFFF] text-transparent bg-clip-text">
                      PHASE
                    </span>
                  </span>
                </span>
                <span className="absolute top-[-38px] right-[800px] text-white ">
                  <span className="font-inter font-extrabold text-9xl leading-[242.05px] text-center text-white bg-opacity-6">
                    <span className="bg-gradient-to-r from-[#A0A3F6] to-[#FFFFFF] text-transparent bg-clip-text opacity-[0.2] ">
                      {number}
                    </span>
                  </span>
                </span>
              </>
            )}
            

          

          <div
            className={
              isOdd
                ? " ml-32 font-inter font-medium text-4xl leading-70 text-center bg-gradient-to-r from-indigo-600 to-white bg-clip-text text-transparent z-10 "
                : "mr-24 font-inter font-medium text-4xl leading-70 text-center bg-gradient-to-r from-indigo-600 to-white bg-clip-text text-transparent z-10 "
            }
          >
            {contentone}
          </div>
          <div
            className={
              isOdd
                ? " ml-32 font-inter font-medium text-4xl leading-70 text-center bg-gradient-to-r from-indigo-600 to-white bg-clip-text text-transparent z-10 "
                : "mr-24 font-inter font-medium text-4xl leading-70 text-center bg-gradient-to-r from-indigo-600 to-white bg-clip-text text-transparent z-10 "
            }
          >
            {contentwo}
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/ef82/1c19/04738357cafa3980e87eaf9c412599e5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6-hxrm3dC9ytRY1bC5BRnJzO5LNWSt-gF5Jjgc5EZL4eqLdAuhUyaIYq5sBsdUmU7nueVNKDQbFeGCh9lTXjnM~akDdv6m7lkllUTo~~Gc2TWkq86qs8FzTOd5MuQGGO6q3w7peWUkQA-FR6kkxGNKdFXyJS7pLyAi5K3heMJOldwzkiIfWuv0RXc~g7Uhd-QNq~BKg4N9Fpd8U2woMcBAb~fzORBew5cpocn1hs4SWlsLy40ulCh73zds6O9X0VGSTBHdoo0GEDeUfX6jN8LVFu~z7WwIKHIUbAD8vuggDL~jOKKxfcT3rdit0meAYCsPSLRiiptwXzEikQe6Zhg__"
            alt="Rotating Image"
            className={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Phases;
