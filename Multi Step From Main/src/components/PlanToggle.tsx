import clsx from 'clsx';
import '../index.css'

type PlanChoice = {
  isYearly: boolean;
  setIsYearly: () => void;
};

export function PlanToggle({ isYearly, setIsYearly }: PlanChoice) {
  return (
    <div className="flex items-center text-sm bg-blue-50 py-3 justify-center gap-4 mt-6">
      <span  className={clsx(
         "transition-colors duration-300",
         !isYearly ? "text-[#032552] font-semibold" : "text-gray-400"
      )}>
        Monthly
      </span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isYearly}
          onChange={setIsYearly}
        />
        <div className="w-9 h-5 bg-[#032552] rounded-full  "></div>
        <div
          className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full 
                     transition-transform duration-300 ease-in-out 
                     peer-checked:translate-x-4"
        ></div>
      </label>

      <span  className={clsx(
         "transition-colors duration-300",
         isYearly ? "text-[#032552] font-semibold" : "text-gray-400"
      )}>
        Yearly
      </span>
    </div>
  );
}
