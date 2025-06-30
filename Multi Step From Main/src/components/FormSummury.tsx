import '../index.css';

type SummuryProps = {
  SelectedPlan: { id: string; priceM: number; priceY: number };
  SelectedAddons: {
    id: string;
    title: string;
    description: string;
    priceMonth: number;
    priceYear: number;
  }[];
  isYearly: boolean;
  onChangePlan: () => void;
};


export function FormSummury({ SelectedPlan, SelectedAddons,isYearly,onChangePlan}: SummuryProps) {

  const planTotal = isYearly ? SelectedPlan.priceY : SelectedPlan.priceM;

  const addonsTotal = SelectedAddons.reduce((acc, addon) => {
    return acc + (isYearly ? addon.priceYear : addon.priceMonth);
  }, 0);

  const total = planTotal + addonsTotal;

  return (
    <div className="step2">
      <h1 className="bld text-2xl text-[#032552] mb-3">Finishing up</h1>
      <p className="mid text-gray-500 mb-3">Double-check everything looks OK before confirming</p>
      <div className="grid gap-4 md:grid-cols-1 sm:grid-cols-3">
        <div className='flex items-baseline justify-between pb-6 border-b border-b-gray-400'>
            <div>
                <h3 className='bld text-[#032552]'>{ SelectedPlan.id } {isYearly? "(Yearly)" : "(Monthly)"}</h3>
                <a  onClick={onChangePlan} className='mid  text-gray-400 border-b-2 border-b-gray-400 hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer'>change</a>
            </div>
            <div className='mid'>{"$"}{isYearly? SelectedPlan.priceY : SelectedPlan.priceM}{isYearly? "/yr" : "/mo"}</div>
        </div>
       <div className='mb-5'>
          {SelectedAddons.map((e) => (
            <div key={e.id} className='flex items-center justify-between mb-1.5'>
              <p className='text-gray-400 mid text-sm '>{e.id}</p>
              <p className='text-xs text-[#032552] '>{isYearly ? `$${e.priceYear}/yr` : `$${e.priceMonth}/mo`}</p>
            </div>
          ))}
          </div>
        <div className='flex items-center justify-between'>
            <div className='text-gray-500 bld'>
                Total ({isYearly ? "per year" : "per month"})
            </div>
            <div className='mid to-blue-600'>
               {"+$"}{total}{isYearly ? "/yr" : "/mo"}
            </div>
        </div>
      </div>
    </div>
  );
}
