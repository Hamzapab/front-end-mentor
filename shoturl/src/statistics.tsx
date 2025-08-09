export default function Statis() {
  return (
    <div className="statis p-6 md:px-20">
      <div className="container mx-auto lg:flex gap-10 overflow-hidden py-20">
        <div className="bg-white lg:items-start relative px-4 pb-8 mb-18 lg:mb-5 rounded-sm flex flex-col items-center text-center">
          <div className="line w-2 h-20 lg:w-[100vw] lg:h-2 -z-1
          bg-[#2acfcf] absolute left-1/2 lg:left-full
           transform -translate-x-1/2 
           bottom-[-80px] lg:bottom-1/2"></div>
          <div className="icon lg:self-start bg-[#3b3054] transform -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center
          enter">
            <img
              src="/assets/images/icon-brand-recognition.svg"
              alt="recognition"
            />
          </div>
          <h2 className="text-[#3b3054] font-bold text-2xl mb-3">
            Brand Recognition
          </h2>
          <p className="text-[#9e9aa7] lg:text-start leading-[1.8]">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded linkes help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white z-0  lg:items-start relative px-4 pb-8 mb-18 lg:mb-5 lg:translate-y-10 rounded-sm flex flex-col items-center text-center">
           <div className="line w-2 h-20 lg:w-10 lg:h-2 z-[-10] 
          bg-[#2acfcf] absolute left-1/2 
           transform -translate-x-1/2 
           bottom-[-80px] lg:hidden"></div>
          <div className="icon lg:self-start bg-[#3b3054] transform -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center">
            <img
              src="/assets/images/icon-detailed-records.svg"
              alt="records"
            />
          </div>
          <h2 className="text-[#3b3054] font-bold text-2xl mb-3">
            Detailed Records
          </h2>
          <p className="text-[#9e9aa7] lg:text-start  leading-[1.8]">
            Gain insights into who is clicking your links.Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bg-white z-0 px-4 pb-8 mb-16 lg:mb-5 lg:translate-y-20 lg:items-start rounded-sm flex flex-col items-center text-center">
          <div className="icon lg:self-start bg-[#3b3054] transform -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center">
            <img
              src="/assets/images/icon-fully-customizable.svg"
              alt="customization"
            />
          </div>
          <h2 className="text-[#3b3054] font-bold text-2xl mb-3">
            Fully Customizable
          </h2>
          <p className="text-[#9e9aa7] lg:text-start  leading-[1.8]">
            Improve brand awarness and content discoverability through
            customizable links,supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
