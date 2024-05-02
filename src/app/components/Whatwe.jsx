import React from 'react'
import Card3 from "./Card3"
function Whatwe() {
  return (
    <>
    <div className="flex">
      <div className="w-[65%] flex flex-col gap-4 pt-10 items-center">
        <div className="text-[28px] font-semibold text-slate-200">
          Posts, articles, and discussions
        </div>
        <div className="flex flex-wrap">
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            Everything
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            Case studies
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            LLMs
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            Machine Learning
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            Deep Learning
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            Computer vision
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            diffusion modes
          </div>
          <div
            tabIndex={0}
            className="text-[12px] focus:bg-white focus:text-black duration-700 w-fit cursor-pointer select-none px-2 text-white py-1.5 rounded-xl font-semibold"
          >
            GANs
          </div>
        </div>
        <div
          className="w-[705px] h-[227px] flex flex-col justify-center items-center rounded-3xl"
          style={{
            backgroundImage: "url('https://s3-alpha-sig.figma.com/img/a016/0b77/19712b77a9dabbb7d570410204c13975?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ezuxONYPdJ3C4VQ8CFpbs28ChhB-1IY3lQTqXEuQ2rAlOjcZk3xeoovB2FQMCz9iMZrhzTsb0o~nhK~u0iHo-X0JJ88ZAjS~GlLXENAW65VKIDljXYjuoQsolLqMTXb3W-brYCUBJdSuMEzb0Yyt2pasVCSofkv0~Gd12fneZrDBMHAzOnCgWvbeLnrswcRjMtYzlvTdoyc30Ryhm8lyfd~mgW-ppkEu1TZk1fqHPDikXPKxRiflpChec6EL9qeCqUVnO8bLZQmES1QyabM~vXw2Y7fQtkA8jB18xhNRk25q449q2S41MZq2vfVVt64-wSSIVsYWwEYtM7kQhlk-og__')",
            backgroundPosition: "center",
          }}
        >
          <div className="text-[30px] text-slate-200 font-semibold text-center">
            Machine Learning Mastery
          </div>
          <div className="text-[12px] text-slate-400 font-semibold text-center">
            By Rohan 5 March 2024 12:00 pm
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <div className="w-[49px] h-[3px] bg-slate-200"></div>
          <div className="w-[49px] h-[3px] bg-slate-200"></div>
          <div className="w-[49px] h-[3px] bg-slate-200"></div>
        </div>
        <div className="grid pt-5 grid-cols-2 grid-rows-3 w-fit gap-x-12 gap-y-6">
          <Card3 url="https://s3-alpha-sig.figma.com/img/5306/fcab/852f05b8f975056a6344bd1247e6fabd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y9d2-dVODA3U8IevdoHXHlWzVaqlmWIgYbgcAfwuijUEP4Xvhw0TLHFjG5FCNomBNMzy3tAljJqGGjbLlugZJZ01sUHfa1BaObjyrQL1tgsCcy00Y0tTzZoMU7VwgSK1W3br8aOuP8XWcvdVk6TLi6zf2Kr2WLzfoV~1yzWomhf0h7vSw5L4v8fdEj7QvcFt8x9~t2ec~O-slpJSJJIgZjbKGJ1Uh7IDYRXyuTsNYNae7ig1mVWLivXB57XpjXCDZVDtS62gFCQ9-zhZZQUPOLOmR2G~nHEUc31ZvtRFgvadZ8krlJoW1TE7V6VVHHbUp3LS9rBQPz2Hyr5S5xXpyA__" />
          <Card3 url="https://s3-alpha-sig.figma.com/img/33ed/1cf9/0d3dde3e74314c5a613b763c9d527dee?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nGEFuQBSx~Z8lqfUWb3G58NFAy1eIgn4LJ2TTKFVw9ovFkqm31t9d2yo~6gUxq2OFxX0g0Pa~EUnJhW9D8FHoyBGbF-TJgwTC-ADZw6SKmqmUjTUDBWWaUeX4RsKX11i57aJwD49js82e9iymL2xHN-nurJ~u0VXzYFJa9k6jQW4ZW~CEMEH3SfO4XouaHRYi04xR~70PlmZW7zYdFrc9AahH~~1WiQWLVJazkC5wKs16YzAfGOumn4kfwehKFwD99IiHQNGoA0vaESerxRldd6MNsf8NlCh2OiTMbal9k6uFZ0od~5uSQv8eYCI6ZERtjq9KBvp7PSbvo9CV0fXAA__" />
          <Card3 url="https://s3-alpha-sig.figma.com/img/9ff3/b5e9/9f79396c6b5d6d98a6369d9e06406965?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VjzBfERcnXxlCFpJWVEVY1LZUEdwP8hNq9dAU3ErMh9V5I7ujxLvNJ3BzWF0PqxRC6G~eeeq6lI5vc24ZmblwJOUnhWMRGHIvFv0veDqUJrAf2QIhW1-EwcNDzh-ErxAiRi0gxiMCGUy7UYBhTukTj6cN1Vt6ReTvWj2ep5wmU0~0Tk3duh6OAvwWDEwe4AzmES3nWg5zGc2Bido3IRHylPEp6TAKauv-7lw7TPHhNm6QRIouDCp9fx03ZYg8Q2zowW88mASSwyfGI3VHLlGlWIKKldGx2TY3fMUPGXsnY2lHeR69w4Sq-ziVfd6wsOeduBocU-hcpXF0D9Zp0vwHA__" />
          <Card3 url="https://s3-alpha-sig.figma.com/img/0c3e/b2da/40e448aa6654913ecb2f9022aced51c6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxRMM0ut0nRP1K4N1CbgMIVihu3vRA-jCfcG5anNC2h3vB8VP47yW08DjrIPi8PuZk5vNVDWFM0qtXEDRj2AYvcodBYASQ5QFy1qVJDXy1bLm6HKXEyy8NUv~n1MQxkJeRl4ZeDWG0QCViUh8Q-tbwbBi5yWkTPOGXYrl9lTe8UdWqyurCFTzwRz1b6-b2Vat6EhnMiPjoCTD46K4ZBuJg7SvIqd~1v1P9Wu-tO1xiGEVQb~FURhjbFF6P~SY8KNaIF5CZ6n6cfCawboW5Oh5ROtfnICnj1Nx9fCfXi7Zx~9KE0BgaqV99vQqWTQ4FL6ssfAPytBgDdf-SeP0HEkuQ__" />
          <Card3 url="https://s3-alpha-sig.figma.com/img/2bd2/31bc/663816282f93fccf86b0ff4b6833330d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=POS-PPpjVk3Ipa3XaK1PmfIbj-5YuoElob9147BbM06Pg~xS1nV8vyKwF8QzhGIIK4hVz5Ot5GCvXo3r4fS419BntkARcoO8C04qL0vCzdhsgwfNeekPhPy2U1r1Em57KqMfZXpsaeF5N7wQaPgd2NkBfmwj2HEPynSJXD5QzYTKURwBOPR5kXcQA88ltlZdxCjYp1c6LN8bURMTKRud49l85qn-itbzBX9BUT9Z6Al6LNR39w433bYz861wYwzdmSUBVrHsHAtBspccyCQ188bnxI9Nx7xuIWwhQpqO6DtolqhKiqpkOpI-L4qaD3yRHq3U859JdEz0G4ulmy6XvA__" />
          <Card3 url="https://s3-alpha-sig.figma.com/img/cdab/993e/74973cb2d5ecdbd679f3d74612cdd612?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bM5AgJ21vbBtnpkHW~It~c8wfsIbjhULlQPbiQYOoVfwl03BOtBKK-0-TbyTm5GYmiS8m5RE7ewvKHzRfpNf--UwR5C2-Eg3Eo3~VMX09YaU6ArLPSENQO9VgIwo~MN~8qMz--MznSwWoJXqnYpQMQiuFeXg0DduU7XnTGJWSto8W02q~KthfaBUIs~piBr~oUkUdDLNwbDipwcQYw-DnDwo2ShLBQ69sxKBO3BxC8zdSR3ALmiMzxvpjJW--RxN3pm-hywCPwqy6RQCys44xCLUYseq1B-~j6c9-E2mW7dHsUttWhbwEafXVKmVRIpCCddSwSGrK8UNevgkndEuzQ__" />
        </div>
      </div>
      <div className="w-[35%] flex flex-col gap-6 items-center justify-start py-10">
        <div className="text-[22px] font-semibold text-slate-200">
          Community blog posts
        </div>
        <div className="flex flex-col gap-1">
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
          <div tabIndex={0} className="flex focus:bg-slate-800 duration-700 flex-col w-fit p-2 px-6 rounded-xl gap-2">
            <div className="text-slate-200">Large Language Models in Quest for Adventure</div>
            <div className="flex justify-start gap-3 font-semibold text-white">
              <img
                className="h-[22px]"
                src="https://s3-alpha-sig.figma.com/img/8328/13d1/7e59059272e656281327a42cafc5894f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BUmDartWW4SSBMrynE1Lj5DPysLASYkFPAzuujwRGHyNyA~SaGidOYFgDAOi6PGbCyKdCnGCraC0ntrRDp2iXzRiNpnoCJzKN7SUlBxYihb1foTnhDxih9-fxcOaAuTkLvgZB7IYaUCfo3I8CaXfNXeaY0wC8T~CgeMqicdjQdlomd9AlsHjygGH-lq6DMQiaxqFD3SrUL4u-VuM4jwBY7SP6oY~AKxMeQTZQevxviP1ZPagAhyK6ypBlLnWBGKrOBSZQG2B4tDYX1i97lTYueb1A9OLDTGZ7Qi61nlYpo3uZ7qdPrzBHrGW3V40MpqJPPL7lleefkVRkGydmyURRg__"
                alt=""
              />
              <div className="text-slate-200">By Crazy jenna</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Whatwe
