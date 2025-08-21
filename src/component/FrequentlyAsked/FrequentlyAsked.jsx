import { useState } from "react";
import plus from "../../assets/Icons/Plus.svg";
import sub from "../../assets/Icons/Substr.svg";

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState("");

  const toggle = (index) => {
    console.log(index);
    setOpenIndex(index === openIndex ? null : index);
  };
  const faqsData = [
    {
      question: "How much does it cost to use Properteasy?",
      answer: `Joining Properteasy is completely free for landlords, homeowners and vendors. There are no 
subscription fees, membership fees, or hidden charges. Property owners pay one, all inclusive 
price for services rendered, and it costs nothing for vendors to join the Properteasy network of 
licensed professionals.`,
    },
    {
      question: "How does Properteasy ensure quality contractors?",
      answer: `Properteasy has rigorous standards in place that all vendors must meet before joining our 
network of trusted professionals. All members must be licensed and insured. Additionally, our 
Quality Control Team conducts field interviews with each and every vendor to determine 
reliability, professionalism and level of expertise before admission to the network is granted. 
Keep in mind, Properteasy was created by seasoned property owners and managers, so we 
know what to look for in a trade professional.`,
    },
    {
      question: "How does Properteasy ensure fair pricing?",
      answer: `The Properteasy system works because it is beneficial to all parties involved. Vendors in the 
Properteasy network benefit from a steady stream of work, which affords us the ability to obtain 
preferential pricing. As a result, property owners benefit from our ability to dispatch one of our 
vetted professionals in virtually any trade category swiftly and efficiently, at reasonable prices. 
Our goal is to provide superior service at fair market prices. 
 
Before admitting vendors to the Properteasy network, we ensure that their pricing is aligned with 
local market rates. Shopping for quotes is a thing of the past with Properteasy. You can rest 
assured that all Properteasy professionals will provide quality service at reasonable prices. 
 
Simply put, everyone wins!`,
    },
    {
      question: "How quickly will my job be done?",
      answer: `During normal business hours, property owners can expect same day job acceptance by a 
licensed professional, usually within a few hours, with emergency service calls being prioritized. 
Our vast network of trusted vendors gives us the bandwidth to respond to your service needs 
swiftly and efficiently. While we move quickly, scheduling is ultimately based upon your 
availability. Our intuitive scheduling interface seamlessly allows you and the vendor to arrange a 
convenient time to meet your maintenance needs.`,
    },
    {
      question: "Is insurance coverage included?",
      answer: `All vendors in the Properteasy network are licensed and insured. Properteasy does not directly 
provide insurance coverage, however, we verify that every vendor we partner with has an active 
and current insurance policy in place to protect both property owners and tenants.`,
    },
    {
      question: "Is all work guaranteed?",
      answer: `Yes. Properteasy stands behind the quality of work completed through our platform. If you're not 
satisfied with the results, report the issue and we'll coordinate a resolution.`,
    },
    {
      question: "What happens if a vendor doesn't show up?",
      answer: `In the rare event a vendor misses a scheduled appointment without notice or communication, 
our system automatically flags the issue and notifies our dispatch team. We will promptly 
reassign the job to an alternate qualified vendor and prioritize your request to avoid further 
delays. Once you book a maintenance appointment with Properteasy, you can rest assured the 
job will get done.`,
    },
  ];

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <section className="flex   w-full mx-auto flex-col gap-4 md:gap-8 lg:gap-[64px] text-white py-8  lg:py-24 md:px-12 px-5">
        <div className=" grid md:grid-cols-2 lg:gap-16 md:gap-12 gap-8 items-start">
          <div className="flex flex-col justify-between max-w-[535px] h-full lg:min-h-[400px] sm2:pb-[42px]">
            <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
              <h5 className="bg-[#F8F8F8]  text-[#242424] border border-[#ECECEC] px-3 py-1 rounded-full font-medium w-fit">
                FAQs
              </h5>

              <h1 className="font-medium w-full text-[#242424] text-[24px] md:text-[72px] leading-tight sm:leading-tight md:leading-tight lg:leading-[69px] tracking-[0]">
                Frequently Asked Questions
              </h1>

              <h2
                style={{ letterSpacing: "0.025em" }}
                className="text-[#242424] w-full text-[18px] md:text-[24px] "
              >
                Got questions? We've got answers. Find everything you need to
                know about using Properteasy.
              </h2>
            </div>

            <a
              href="#"
              className="text-[#2c8d48] w-fit border-b-2 border-[#2c8d48] text-[20px] font-semibold "
            >
              View all
            </a>
          </div>

          {/* Right Column */}
          <div className="w-full divide-y divide-gray-200 border-[#dadada] border-t border-b">
            {faqsData.map((faq, index) => (
              <div key={index} className="py-6">
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between cursor-pointer"
                >
                  <h3
                    className={` text-[20px] ${
                      openIndex === index
                        ? "text-[#242424] font-semibold"
                        : "text-[#595959]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span>
                    {openIndex === index ? (
                      <img src={sub} className="text-red-500"></img>
                    ) : (
                      <img src={plus}></img>
                    )}
                  </span>
                </div>
                {openIndex === index && faq.answer && (
                  <p className="text-[16px] text-[#333333] font-medium mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
