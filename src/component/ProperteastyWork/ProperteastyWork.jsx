import React from "react";
import CardContent from "../CardContent/CardContent";

const RepairProcess = () => {
  return (
    <>
      <section id="working">
        <CardContent
          button_Text="How Properteasy Works"
          title="Here’s How We Make Repairs Easy"
        />
        <div className="lg:max-w-[1440px] w-full mx-auto">
          <div className="px-4 md:px-12 pb-24">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4 pt-10">
              <div className="bg-[#ECEEF2] p-6 rounded-xl relative flex flex-col flex-1 md:flex-[1.5] h-[440px] hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group">
                <div className="w-40 h-56 relative">
                  <h2 className="absolute text-[200px] opacity-[4%] text-[#595959] -top-[72px] font-normal transition-all duration-300 group-hover:opacity-[32%] group-hover:text-white">
                    01
                  </h2>
                </div>
                <h3 className=" text-[40px] mb-6 relative z-10">
                  Tenant submits repair request
                </h3>
                <p className="relative z-10 md:text-[17px] sm:text-2xl lg:text-2xl ">
                  Your tenant reports any issue through Propereasy by providing
                  details and images. This gives us everything we need to get
                  started. No landlord action is required.
                </p>
              </div>

              <div className="bg-[#ECEEF2] p-6 rounded-xl relative flex flex-col flex-1 h-[440px] hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group">
                <div className="w-full h-28 relative">
                  <h2 className="absolute text-[200px] opacity-[4%] text-[#595959] -top-[72px] font-normal transition-all duration-300 group-hover:opacity-[32%] group-hover:text-white">
                    02
                  </h2>
                </div>
                <h3 className="text-[40px] mb-6 relative z-10 leading-tight">
                  If you feel the work needs to be done, approve it!
                </h3>
                <p className="relative z-10 md:text-[17px] text-2xl lg:text-2xl">
                  You’re instantly notified of the request and can review the
                  details and estimate at your leisure. If you choose to move
                  forward, simply approve it with one click.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="bg-[#ECEEF2] p-6 rounded-xl relative flex flex-col flex-1 h-[440px] hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group">
                <div className="w-full h-28 relative">
                  <h2 className="absolute text-[200px] opacity-[4%] text-[#595959] -top-[72px] font-normal transition-all duration-300 group-hover:opacity-[32%] group-hover:text-white">
                    03
                  </h2>
                </div>
                <h3 className="text-[40px] mb-6 relative z-10 leading-tight">
                  We assess the issue and broadcast the job to the most suitable
                  vendors
                </h3>
                <p className="relative z-10 md:text-[17px] text-2xl lg:text-2xl">
                  Properteasy reviews the request, identifies the issue, and
                  assigns it to the most qualified, local professionals.
                </p>
              </div>

              <div className="bg-[#ECEEF2] p-6 rounded-xl relative flex flex-col flex-1 md:flex-[1.5] h-[440px] hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group">
                <div className="w-56 h-56 relative">
                  <h2 className="absolute text-[200px] opacity-[4%] text-[#595959] -top-[72px] font-normal transition-all duration-300 group-hover:opacity-[32%] group-hover:text-white">
                    04
                  </h2>
                </div>
                <h3 className="text-[40px] mb-6 relative z-10 leading-tight">
                  Once a vendor accepts the job, your tenant schedules the job
                  seamlessly
                </h3>
                <p className="relative z-10 md:text-[17px] text-2xl lg:text-2xl">
                  A qualified vendor reviews the details and accepts the job.
                  Your tenant schedules a time that works for them through our
                  platform. They can alternatively provide access instructions
                  so the work can get done, even if nobody’s home.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="bg-[#ECEEF2] p-6 rounded-xl relative flex flex-col flex-1 h-[440px] hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group">
                <div className="w-full h-28 relative">
                  <h2 className="absolute text-[200px] opacity-[4%] text-[#595959] -top-[72px] font-normal transition-all duration-300 group-hover:opacity-[32%] group-hover:text-white">
                    05
                  </h2>
                </div>
                <h3 className="text-[40px] mb-6 relative z-10 leading-tight">
                  You're kept in the loop every step of the way
                </h3>
                <p className="relative z-10 md:text-[17px] text-2xl lg:text-2xl">
                  You receive real-time updates throughout the process so you
                  always know what’s happening with your property, and when. No
                  more wondering or chasing down job status from afar.
                </p>
              </div>

              <div className="bg-[#ECEEF2] p-6 rounded-xl relative flex flex-col flex-1  h-[440px] hover:bg-[#3CAB5C] hover:text-white transition-all duration-300 cursor-pointer group">
                <div className="w-40 h-56 relative">
                  <h2 className="absolute text-[200px] opacity-[4%] text-[#595959] -top-[72px] font-normal transition-all duration-300 group-hover:opacity-[32%] group-hover:text-white">
                    06
                  </h2>
                </div>
                <h3 className="text-[40px] mb-6 relative z-10 leading-tight">
                  Tenant submits repair request
                </h3>
                <p className="relative z-10 md:text-[17px] text-2xl lg:text-2xl">
                  Your tenant reports any issue through Propereasy by providing
                  details and images. This gives us everything we need to get
                  started. No landlord action is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RepairProcess;
