import React from "react";
import CardContent from "../CardContent/CardContent";

const RepairProcess = () => {
  return (
    <>
      <CardContent
        button_Text="How Properteasy Works"
        title="Here’s How We Make Repairs Easy"
      />
      <div className="px-4 md:px-12 pb-24">
        <div className="flex flex-col md:flex-row gap-[10px] pt-10 ">
          <div
            className="bg-[#ECEEF2]   p-6 rounded-xl  relative  flex flex-col w-[800px] h-[440px] 
          hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group"
          >
            <div className="w-[180px] h-[220px]">
              <h2
                className="absolute text-[200px] opacity-[4%] text-[#595959] top-[-25px] font-normal 
    transition-all duration-300 group-hover:opacity-[32%] group-hover:text-[#FFFFFF] "
              >
                01
              </h2>
            </div>

            <h3 className="font-semibold text-[40px] mb-6 relative z-10 ">
              Tenant submits repair request
            </h3>
            <p className="relative z-10 text-2xl">
              Your tenant reports any issue through Propereasy by providing
              details and images. This gives us everything we need to get
              started. No landlord action is required.
            </p>
          </div>

          <div
            className="bg-[#ECEEF2] p-6 rounded-xl h-[440px] relative flex flex-col flex-1 
  hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group"
          >
            <div className="w-[488px] h-[118px]">
              <h2
                className="absolute text-[200px] opacity-[4%] text-[#595959] top-[-25px] font-normal 
    transition-all duration-300 group-hover:opacity-[32%] group-hover:text-[#FFFFFF]"
              >
                02
              </h2>
            </div>

            <h3 className="text-[40px] mb-6 relative z-10 leading-[48px] tracking-tight">
              If you feel the work needs to be done, approve it!
            </h3>

            <p className="relative z-10 text-2xl tracking-[0.025em]">
              You’re instantly notified of the request and can review the
              details and estimate at your leisure. If you choose to move
              forward, simply approve it with one click.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[10px] mt-[10px]">
          <div
            className="bg-[#ECEEF2] p-6 rounded-xl  h-[440px] relative flex flex-col flex-1 
          hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group"
          >
            <div className=" w-[488px] h-[118px]">
              <h2
                className="absolute text-[200px] opacity-[4%] text-[#595959] top-[-25px] font-normal 
    transition-all duration-300 group-hover:opacity-[32%] group-hover:text-[#FFFFFF] "
              >
                03
              </h2>
            </div>

            <h3 className="text-[40px] mb-6 relative z-10 leading-[48px] tracking-tight">
              We assess the issue and broadcast the job to the most suitable
              vendors
            </h3>

            <p className="relative z-10 text-2xl tracking-[0.025em]">
              Properteasy reviews the request, identifies the issue, and assigns
              it to the most qualified, local professionals.
            </p>
          </div>

          <div
            className="bg-[#ECEEF2]  p-6 rounded-xl  relative  flex flex-col w-[800px] h-[440px] 
          hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group"
          >
            <div className=" w-[225px] h-[220px]">
              <h2
                className="absolute text-[200px] opacity-[4%] text-[#595959] top-[-25px] font-normal 
    transition-all duration-300 group-hover:opacity-[32%] group-hover:text-[#FFFFFF]"
              >
                04
              </h2>
            </div>

            <h3 className="text-[40px] mb-6 relative z-10 leading-[48px] tracking-tight  ">
              Once a vendor accepts the job, your tenant schedules the job
              seamlessly
            </h3>
            <p className="relative z-10 text-2xl tracking-[0.025em]">
              A qualified vendor reviews the details and accepts the job. Your
              tenant schedules a time that works for them through our platform.
              They can alternatively provide access instructions so the work can
              get done, even if nobody’s home.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[10px] mt-[10px]">
          <div
            className="bg-[#ECEEF2] p-6 rounded-xl  h-[440px] relative flex flex-col flex-1 
          hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group"
          >
            <div className=" w-[488px] h-[118px]">
              <h2
                className="absolute text-[200px] opacity-[4%] text-[#595959] top-[-25px] font-normal 
    transition-all duration-300 group-hover:opacity-[32%] group-hover:text-[#FFFFFF]"
              >
                05
              </h2>
            </div>

            <h3 className="text-[40px] mb-6 relative z-10 leading-[48px] tracking-tight">
              You're kept in the loop every step of the way
            </h3>

            <p className="relative z-10 text-2xl tracking-[0.025em]">
              You receive real-time updates throughout the process so you always
              know what’s happening with your property, and when. No more
              wondering or chasing down job status from afar.
            </p>
          </div>

          <div
            className="bg-[#ECEEF2]   p-6 rounded-xl  relative  flex flex-col w-[800px] h-[440px] 
          hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group"
          >
            <div className="w-[180px] h-[202px]">
              <h2
                className="absolute text-[200px] opacity-[4%] text-[#595959] top-[-25px] font-normal 
    transition-all duration-300 group-hover:opacity-[32%] group-hover:text-[#FFFFFF]"
              >
                06
              </h2>
            </div>

            <h3 className="text-[40px] mb-6 relative z-10 leading-[48px] tracking-tight">
              Tenant submits repair request
            </h3>
            <p className="relative z-10 text-2xl">
              Your tenant reports any issue through Propereasy by providing
              details and images. This gives us everything we need to get
              started. No landlord action is required.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepairProcess;
