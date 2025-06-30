import { PlanItem } from './PlanItem';
import { PlanToggle } from './PlanToggle';
import type { Plan } from './PlanItem';
import { useFormContext } from "react-hook-form";
import '../index.css';
import { useEffect, useState } from 'react';

type PlanListProps = {
  plans: Plan[];
  selectedId: string;
  isYearly : boolean;
  setIsYearly : (isYearly : boolean) => void ;
 onSelect: (id: string, priceM: number, priceY: number) => void;
};

export function SelectPlan({ plans, selectedId, onSelect, isYearly , setIsYearly }: PlanListProps) {
  const { formState } = useFormContext();
  const [errorKey, setErrorKey] = useState(0);

  //  Use Errorkye to cause rerender so the error will show again
  useEffect(() => {
    if (formState.errors.selectedPlan) {
      setErrorKey((prev) => prev + 1); 
    }
   }, [formState.errors.selectedPlan]);
   
  return (
    
    <div className="step2">
      {formState.errors.selectedPlan && (
        <p   key={errorKey}
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg py-1 px-4 bg-red-500/90 text-white bld text-sm animate-dropFade z-50">
          {formState.errors.selectedPlan.message as string}
        </p>
      )}
      <h1 className="bld text-2xl text-[#032552] mb-3">Select your plan</h1>
      <p className="mid text-gray-500 mb-3">You have the option of monthly or yearly billing.</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <PlanItem
            key={plan.id}
            plan={plan}
            isYearly={isYearly}
            isSelected={plan.id === selectedId}
            onClick={() => onSelect(plan.id,plan.priceM,plan.priceY)}
          />
        ))}
      </div>
      <PlanToggle isYearly={isYearly} setIsYearly={()=>setIsYearly(!isYearly)} />
    </div>
  );
}
