import { useEffect, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (email && (!email.includes("@") || !email.includes("."))) {
      setError("Please enter a valid email.");
    } else {
      setError(null);
    }
  }, [email]);

  function handleScroll(event) {
    const scrollContainer = event.target;
    const icon = document.getElementById("rotateIcon");
    if (icon) {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrolled = scrollContainer.scrollLeft;

      const rotation = (scrolled / maxScroll) * 360;
      icon.style.transform = `rotate(${rotation}deg)`;
    }
  }

  const redirect = () => {
    if (email && !error) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setError("Please enter a valid email.");
    }
  };
  return (
    <div className="relative min-h-screen w-full flex flex-col md:grid grid-cols-10 max-w-[1440px] mx-auto">
      <div className="w-full h-full md:col-span-6 bg-gradient-to-bl z-10 from-[#16151E] to-black flex flex-col space-y-[16px] p-12 relative">
        <img
          src="/blue.svg"
          alt=""
          className="absolute w-full h-full object-cover top-0 left-0 bottom-0 -z-10"
        />
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-6 relative">
          <div className="flex flex-col gap-y-[16px] w-full max-w-[322px]">
            <img
              src="/bell.svg"
              alt=""
              className="w-[32px] h-[32px]"
              id="rotateIcon"
            />
            <h2 className="font-medium text-[31px] text-[#F2F2F2] stroke-[#000000] leading-9">
              Get notified when a highly correlated whale makes a move
            </h2>
            <p className="text-[#F2F2F2] font-medium text-[16px]">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className="absolute left-[30%] bg-gradient-to-r from-black/20 -z-10 to-transparent w-[200px] h-[200px] rounded-full blur" />
          <div className="overflow-x-scroll w-full  hide-scrollbar max-w-full flex gap-6 md:ml-0 md:-mr-[48px] carousel ">
            <div className="bg-white  p-5 space-y-6 w-[189.7px] h-[171.5px] relative rounded-[8.9px] carousel-item z-30">
              <p className="text-[9.1px] text-right font-semibold leading-[10.92px]">
                save
              </p>
              <img
                src="/bell1.svg"
                alt=""
                className="w-[28px] h-[28px] absolute top-[-5px] left-[14px]"
              />
              <h2 className=" text-[14px] font-semibold leading-[16.8px]">
                We&apos;ll be sending notifications to you here
              </h2>
              <input
                placeholder="hello@gmail.com"
                className="w-[161px] h-[35px] rounded-[5.6px] border-[0.7px] py-[8.4px] px-[11.2px] border-[#D4D4D4] flex items-center justify-center text-[13px] font-semibold text-[#19191A] outline-none"
              />
            </div>
            <div className="bg-white inline-flex flex-col justify-between p-5 space-y-6 w-[189.7px] h-[171.5px] relative rounded-[8.9px] flex-none carousel-item">
              <p className="text-right">
                <input
                  type="checkbox"
                  checked
                  className="text-[9.1px] text-right w-[14px] h-[14px] rounded-[4.2px] text-[#0071E3]"
                />
              </p>
              <img
                src="/barchart.svg"
                alt=""
                className="w-[28px] h-[28px] absolute top-[-5px] left-[14px]"
              />
              <div>
                <h2 className="text-[11.2px] font-medium  leading-[13.44px]">
                  Notify me when any wallets move more than
                </h2>
                <div className="w-[66.4px] h-[19.6px] rounded-[2.8px] p-[4.2px] gap-[2.8px] bg-[#E5E5E6] flex items-center">
                  <p className="text-[9.1px] font-medium leading-[10.92px]">
                    $1,000.00
                  </p>
                  <img
                    src="/triangledown.svg"
                    alt=""
                    className="w-[11.2px] h-[11.2px]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white inline-flex flex-col justify-between p-5 space-y-6 w-[189.7px] h-[171.5px] relative rounded-[8.9px] flex-none carousel-item">
              <p className="text-right">
                <input
                  type="checkbox"
                  checked
                  className="text-[9.1px] text-right w-[14px] h-[14px] rounded-[4.2px] text-[#0071E3]"
                />
              </p>
              <img
                src="/barchart.svg"
                alt=""
                className="w-[28px] h-[28px] absolute top-[-5px] left-[14px]"
              />
              <div className="space-y-[4px]">
                <h2 className="text-[11.2px] font-medium  leading-[13.44px]">
                  Notify me when any wallet dormant for
                </h2>
                <div className="w-[66.4px] h-[19.6px] rounded-[2.8px] p-[4.2px] gap-[2.8px] bg-[#E5E5E6] flex items-center">
                  <p className="text-[9.1px] font-medium leading-[10.92px]">
                    &gt; 30 days
                  </p>
                  <img
                    src="/triangledown.svg"
                    alt=""
                    className="w-[11.2px] h-[11.2px]"
                  />
                </div>
                <p className="text-[#19191A] text-[11.2px] leading-[13.4px] font-medium">
                  becomes active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full  md:col-span-4 bg-[#FFFFFF] flex flex-col items-center justify-center">
        
      </div>
    </div>
  );
};

export default App;
