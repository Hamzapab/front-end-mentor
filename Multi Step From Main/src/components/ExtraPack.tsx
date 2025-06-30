import { AddOn } from './AddOn';
import type { PackPlan } from './AddOn';
import '../index.css';

type ExtraPAckProps = {
  plans: PackPlan[];
  selectedIds: string[];
  isYearly : boolean;
  onSelectAddons: (id: string, priceMonth: number, priceYear: number) => void;
};

export function ExtraPack({ plans, selectedIds,isYearly, onSelectAddons }: ExtraPAckProps) {

  return (
    <div className="step2">
      <h1 className="bld text-2xl text-[#032552] mb-3">Pick add-ons</h1>
      <p className="mid text-gray-500 mb-3">Add-ons help enhace your gaming experience.</p>
      <div className="grid md:grid-cols-1 gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <AddOn
            key={plan.id}
            plan={plan}
            isYearly={isYearly}
            isSelected={selectedIds.includes(plan.id)}
            onChange={() => onSelectAddons(plan.id,plan.priceMonth,plan.priceYear)}
          />
        ))}
      </div>
    </div>
  );
}
