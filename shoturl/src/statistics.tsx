export default function Statis() {
  return (
    <section
      className="statis p-6 md:px-20"
      aria-labelledby="statistics-heading"
      role="region"
    >
      <div className="container mx-auto lg:flex gap-10 overflow-hidden py-20">
        {/* Card 1 */}
        <article
          className="bg-white lg:items-start relative px-4 pb-8 mb-18 lg:mb-5 rounded-sm flex flex-col items-center text-center"
          aria-labelledby="brand-recognition-heading"
        >
          <div
            className="line w-2 h-20 lg:w-[100vw] lg:h-2 -z-1
          bg-[#2acfcf] absolute left-1/2 lg:left-full
           transform -translate-x-1/2 
           bottom-[-80px] lg:bottom-1/2"
            aria-hidden="true"
          ></div>
          <div
            className="icon lg:self-start bg-[#3b3054] transform -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <img
              src="/assets/images/icon-brand-recognition.svg"
              alt=""
              role="presentation"
              width={48}
              height={48}
            />
          </div>
          <h2
            id="brand-recognition-heading"
            className="text-[#3b3054] font-bold text-2xl mb-3"
          >
            Brand Recognition
          </h2>
          <p className="text-[#9e9aa7] lg:text-start leading-[1.8]">
            Boost your brand recognition with each click. Generic links don&apos;t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        {/* Card 2 */}
        <article
          className="bg-white z-0  lg:items-start relative px-4 pb-8 mb-18 lg:mb-5 lg:translate-y-10 rounded-sm flex flex-col items-center text-center"
          aria-labelledby="detailed-records-heading"
        >
          <div
            className="line w-2 h-20 lg:w-10 lg:h-2 z-[-10] 
          bg-[#2acfcf] absolute left-1/2 
           transform -translate-x-1/2 
           bottom-[-80px] lg:hidden"
            aria-hidden="true"
          ></div>
          <div
            className="icon lg:self-start bg-[#3b3054] transform -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <img
              src="/assets/images/icon-detailed-records.svg"
              alt=""
              role="presentation"
              width={48}
              height={48}
            />
          </div>
          <h2
            id="detailed-records-heading"
            className="text-[#3b3054] font-bold text-2xl mb-3"
          >
            Detailed Records
          </h2>
          <p className="text-[#9e9aa7] lg:text-start  leading-[1.8]">
            Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </article>
        {/* Card 3 */}
        <article
          className="bg-white z-0 px-4 pb-8 mb-16 lg:mb-5 lg:translate-y-20 lg:items-start rounded-sm flex flex-col items-center text-center"
          aria-labelledby="fully-customizable-heading"
        >
          <div
            className="icon lg:self-start bg-[#3b3054] transform -translate-y-1/2 w-18 h-18 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <img
              src="/assets/images/icon-fully-customizable.svg"
              alt=""
              role="presentation"
              width={48}
              height={48}
            />
          </div>
          <h2
            id="fully-customizable-heading"
            className="text-[#3b3054] font-bold text-2xl mb-3"
          >
            Fully Customizable
          </h2>
          <p className="text-[#9e9aa7] lg:text-start  leading-[1.8]">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
  );
}
