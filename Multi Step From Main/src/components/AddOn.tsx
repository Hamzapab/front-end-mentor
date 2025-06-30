import { Check } from "lucide-react";
import '../index.css'

export type PackPlan = {
  id: string;
  title: string;
  description: string;
  priceMonth: number;
  priceYear: number;
};

type AddonsProps = {
  plan: PackPlan;
  isSelected: boolean;
  isYearly : boolean;
  onChange: () => void;
};

export function AddOn({ plan, isSelected, isYearly,onChange }: AddonsProps) {
  return (
    <button 
      type="button"
      onClick={onChange}
      className={`border  p-4 rounded-md flex items-center justify-between gap-4 w-full
         hover:border-[#032552] hover:cursor-pointer
         ${
        isSelected ? "border-[#032552] bg-blue-50" : "border-gray-300"
      }`}
    >
      <div className="flex items-center">
        <div
          className={`w-4.5 h-4.5 mr-5 rounded-sm flex items-center justify-center border ${
          isSelected ? "bg-blue-600 border-blue-600 text-white " : "border-gray-400"
           }`}>
           {isSelected && <Check size={12} />}
        </div>
        <div className="text-left">
           <h3 className="font-bold text-sm text-[#032552] pb-1">{plan.title}</h3>
           <p className="text-gray-500 text-xs">{plan.description}</p>
        </div>
      </div>
       <p className="text-blue-700 text-sm">{"+$"}{isYearly ? plan.priceYear : plan.priceMonth}{isYearly ? "/yr" : "/mo"}</p>
    </button>
  );
}