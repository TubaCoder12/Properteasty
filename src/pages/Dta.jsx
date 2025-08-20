<section className="px-4 md:px-12 py-6">
  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    {/* Self Management */}
    <div className="bg-[#F6F7F9] px-6 pt-[44px] pb-[32px] rounded-[20px] flex flex-col h-full">
      <h2 className="text-5xl font-[500] text-center">Self Management</h2>

      <div className="space-y-4 py-[90px] flex-1 flex flex-col justify-center">
        {selfManagement.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white gap-3 p-6 rounded-3xl transition-all duration-300 
              text-[24px] group hover:bg-[#3CAB5C]"
          >
            {/* Icon */}
            <div className="w-9 h-9 flex items-center justify-center text-[#3CAB5C] group-hover:text-white">
              {item.icon}
            </div>

            {/* Text */}
            <p
              className="text-2xl leading-[30px] tracking-normal text-left font-[500] 
              text-[#333333] group-hover:text-white"
            >
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

      <div className="space-y-4 py-[90px] flex-1 flex flex-col justify-center">
        {properteasy.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-[#52C171] gap-3 p-6 rounded-3xl 
              transition-all duration-300 text-[24px] group hover:bg-white"
          >
            {/* Icon */}
            <div className="w-9 h-9 flex items-center justify-center text-white group-hover:text-[#52C171]">
              {item.icon}
            </div>

            {/* Text */}
            <p className="text-2xl leading-[30px] tracking-normal text-left font-[500] text-white group-hover:text-[#52C171]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>;
