import '../index.css'

export type Plan = {
  id: string;
  title: string;
  priceM: number;
  priceY: number;
  icon: string;
};

type PlanItemProps = {
  plan: Plan;
  isYearly: boolean;
  isSelected: boolean;
  onClick: () => void;
};

export function PlanItem({ plan,isYearly, isSelected, onClick }: PlanItemProps) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`border p-4 rounded-md flex md:flex-col md:items-baseline md:gap-10 items-center gap-4 w-full 
        hover:border-[#032552] hover:cursor-pointer
        ${
        isSelected ? "border-[#032552] bg-blue-50" : "border-gray-300"
      }`}
    >
      <img src={`/assets/images/${plan.icon}`} alt={plan.title} className="w-8 h-8" />
      <div className="text-left">
        <h3 className="font-bold text-sm text-[#032552]">{plan.title}</h3>
        <p className="text-gray-500 text-sm">{"$"}{isYearly ? plan.priceY : plan.priceM}{isYearly ? "/yr" : "/mo"}</p>
        {isYearly && <p className="text-[#032552] text-xs">2 month free</p>}
      </div>
    </button>
  );
}