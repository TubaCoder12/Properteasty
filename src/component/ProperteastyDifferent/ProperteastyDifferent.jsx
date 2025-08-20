import React, { useState, useRef, useEffect } from "react";
import CardContent from "../CardContent/CardContent";
import {
  Phone,
  Info,
  Calendar,
  EyeOff,
  CheckCircle2,
  Globe,
  Clock,
  Bell,
} from "lucide-react";

export default function ToggleSwitch() {
  const [active, setActive] = useState("self");

  // Refs for equal height logic
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const [rowHeights, setRowHeights] = useState([]);

  useEffect(() => {
    const leftHeights = leftRefs.current.map((ref) => ref?.offsetHeight || 0);
    const rightHeights = rightRefs.current.map((ref) => ref?.offsetHeight || 0);

    const maxHeights = leftHeights.map((h, i) =>
      Math.max(h, rightHeights[i] || 0)
    );
    setRowHeights(maxHeights);
  }, [active]);

  const selfManagement = [
    {
      icon: <Phone />,
      text: "3 am tenant calls",
      highlight: true,
    },
    {
      icon: <Info />,
      text: "Not knowing what vendor to call and if they’ll even be available",
    },
    {
      icon: <Calendar />,
      text: "3 - way scheduling nightmares",
    },
    {
      icon: <EyeOff />,
      text: "No visibility into job progress",
    },
  ];

  const properteasy = [
    {
      icon: <CheckCircle2 />,
      text: "No more text or calls. We handle the requests",
      highlight: true,
    },
    {
      icon: <Globe />,
      text: "An expansive vendor network in every service category",
    },
    {
      icon: <Clock />,
      text: "Intuitive scheduling all in one place",
    },
    {
      icon: <Bell />,
      text: "You get real-time notifications and updates from start to finish  ",
    },
  ];

  return (
    <>
      <CardContent button_Text="What makes Properteasy different" />
      <div className="flex flex-col items-center gap-[5px] pb-24">
        {/* Toggle */}
        <div
          className="relative flex items-center justify-between bg-[#F6F7F9] shadow-e3 
                     rounded-[12px] px-[4px] py-[8px] gap-[5px] overflow-hidden"
          style={{ width: "434px", height: "40px" }}
        >
          {/* Animated background highlight */}
          <div
            className={`absolute top-[4px] h-[32px] w-[210.5px] rounded-[8px] bg-white shadow-e3 transition-all duration-300`}
            style={{
              left: active === "self" ? "4px" : "219.5px",
            }}
          ></div>

          {/* Buttons */}
          <button
            onClick={() => setActive("self")}
            className={`relative z-10 w-[210.5px] h-[32px] p-[4px] rounded-[8px] 
              transition-all duration-300 ${
                active === "self"
                  ? "text-[#242424] text-xs leading-[18px] font-semibold"
                  : "text-[#333333] text-[12px] tracking-[3.5%] leading-[16px] font-[400]"
              }`}
          >
            Self Management
          </button>

          <button
            onClick={() => setActive("traditional")}
            className={`relative z-10 w-[210.5px] h-[32px] p-[4px] rounded-[8px] 
              transition-all duration-300 ${
                active === "traditional"
                  ? "text-[#242424] text-xs leading-[18px] font-semibold"
                  : "text-[#333333] text-[12px] tracking-[3.5%] leading-[16px] font-[400]"
              }`}
          >
            Traditional Property Management
          </button>
        </div>

        {/* Content */}
        <div className="text-center mt-2 text-black/16 font-medium">
          {active === "self" && (
            <>
              <h2 className="text-7xl px-12 text-left leading-[72px] tracking-normal mb-12">
                From Hands-on to Hands-free
              </h2>

              <section className="px-4 md:px-12 py-6">
                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                  {/* Self Management */}
                  <div className="bg-[#F6F7F9] px-6 pt-[44px] pb-[32px] rounded-[20px] flex flex-col h-full">
                    <h2 className="text-5xl font-[500] text-center">
                      Self Management
                    </h2>

                    <div className="py-[90px] flex-1 flex flex-col justify-center gap-4">
                      {selfManagement.map((item, index) => (
                        <div
                          key={index}
                          ref={(el) => (leftRefs.current[index] = el)}
                          style={{
                            minHeight: rowHeights[index] || "auto",
                          }}
                          className="flex items-center bg-white gap-3 p-6 rounded-3xl 
                            transition-all duration-300 text-[24px] group hover:bg-[#3CAB5C]"
                        >
                          <div className="w-9 h-9 flex items-center justify-center text-[#3CAB5C] group-hover:text-white">
                            {item.icon}
                          </div>
                          <p className="text-2xl font-[500] text-[#333333] group-hover:text-white text-left">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* With Properteasy */}
                  <div className="bg-[#3CAB5C] px-6 pt-[44px] pb-[32px] rounded-[20px] flex flex-col h-full">
                    <h2 className="text-5xl font-[500] text-center text-white">
                      With Properteasy
                    </h2>

                    <div className="py-[90px] flex-1 flex flex-col justify-center gap-4">
                      {properteasy.map((item, index) => (
                        <div
                          key={index}
                          ref={(el) => (rightRefs.current[index] = el)}
                          style={{
                            minHeight: rowHeights[index] || "auto",
                          }}
                          className="flex items-center bg-[#52C171] gap-3 p-6 rounded-3xl 
                            transition-all duration-300 text-[24px] group hover:bg-white"
                        >
                          <div className="w-9 h-9 flex items-center justify-center text-white group-hover:text-[#52C171]">
                            {item.icon}
                          </div>
                          <p className="text-2xl font-[500] text-white group-hover:text-[#52C171] text-left">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {active === "traditional" && (
            <p className="text-3xl font-semibold text-black">
              Traditional Property Management
            </p>
          )}

          <button className="bg-[#3CAB5C] py-3 px-4 text-white mt-[84px] rounded-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
}
