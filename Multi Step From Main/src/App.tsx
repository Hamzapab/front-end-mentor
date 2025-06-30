import { useState, useEffect } from "react";
import { Stepper } from "./components/stepper";
import { PersonalInfo } from "./components/personalInfo";
import { SelectPlan } from "./components/SelectPlan";
import { ExtraPack } from "./components/ExtraPack";
import { FormSummury } from "./components/FormSummury";
import { ThanksYou } from "./components/ThanksYou";
import { plans, packPlans } from "./plan";

import { useForm, FormProvider } from "react-hook-form";

import "./index.css";

function App() {
  // State
  const [formSubmitted,setFormSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedPlanLists, setSelectedPlansList] = useState<{
    id: string;
    priceY: number;
    priceM: number;
  }>({ id: "", priceY: 0, priceM: 0 });

  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

const steps = [
  { stepNumber: 1, stepTitle: "Your info" },
  { stepNumber: 2, stepTitle: "Select plan" },
  { stepNumber: 3, stepTitle: "Add-ons" },
  { stepNumber: 4, stepTitle: "Summary" }
];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // ADDons
  const onSelectAddons = (id: string) => {
  setSelectedAddOns((prev) => {
    const updated = prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id];

    // Sync with react-hook-form
    methods.setValue("selectedAddOns", updated, { shouldValidate: true });

    return updated;
  });
};

  useEffect(() => {
  methods.register("selectedAddOns");
}, [methods]);
  // handle select
  const handlePlanSelect = (id: string, priceM: number, priceY: number) => {
    setSelectedPlansList({ id, priceM, priceY });
    // Validate user select an option
    methods.setValue("selectedPlan", id, { shouldValidate: true });
  };
  // watch Plan selection for form validation
  useEffect(() => {
    methods.register("selectedPlan", {
      required: "Please select a plan.",
    });
  }, [methods]);
  // Goto step
  const goToStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  // Form Steps
  const stepComponents = [
    <PersonalInfo />,
    <SelectPlan
      plans={plans}
      selectedId={selectedPlanLists.id}
      isYearly={isYearly}
      setIsYearly={setIsYearly}
      onSelect={handlePlanSelect}
    />,
    <ExtraPack
      plans={packPlans}
      selectedIds={selectedAddOns}
      isYearly={isYearly}
      onSelectAddons={onSelectAddons}
    />,
    <FormSummury
      SelectedPlan={selectedPlanLists}
      SelectedAddons={packPlans.filter((plan) =>
        selectedAddOns.includes(plan.id)
      )}
      onChangePlan={() => goToStep(2)}
      isYearly={isYearly}
    />,
  ];


  
  // Handle form
  const onSubmitFrom = (data: unknown) => {
    setFormSubmitted(true)
    console.log("All form data:", data);
  };

  const fieldNamesPerStep: string[][] = [
    ["name", "email", "phoneNumber"], // Step 1
    ["selectedPlan"], // Step 2 (plan)
    ["selectedAddOns"],
    ["tes"]
  ];
  return (
    <div className="parent flex flex-col md:flex-row md:p-4 md:bg-white md:m-auto md:mt-20 md:max-w-[900px]">
      <div className="header min-h-[200px] bg-mobile md:bg-desktop p-5 pt-10 md:rounded-lg">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={(step) => setCurrentStep(step)}
        />
      </div>
      <div className="container p-4">
         <div className="relative formCard mt-[-100px] md:mt-0 rounded-lg py-6 px-5 bg-white">
          {!formSubmitted &&<FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmitFrom)}>
              {stepComponents[currentStep - 1]}
            </form>
          </FormProvider>}
          {formSubmitted && <ThanksYou />}
        </div>
         {!formSubmitted && <div className="foter fixed md:relative right-0 h-15 bottom-0 p-4 bg-white w-full flex justify-between items-center ">
                {currentStep > 1  ? (
                  <button
                    aria-label="Return to the previous step"
                    type="button"
                    onClick={prevStep}
                    className="text-gray-500 text-sm px-4 py-2  hover:text-[#032552] hover:cursor-pointer"
                  >
                    Go Back
                  </button>
                ) : (
                  <div />
                )}
                {currentStep  < steps.length  ? (
                  <button
                    type="button"
                    onClick={async () => {
                      const isValid = await methods.trigger(
                        fieldNamesPerStep[currentStep - 1]
                      );
                      if (isValid) nextStep();
                    }}
                    className="bg-[#012555] transition-all duration-300 ease-in-out   hover:bg-purple-400  hover:cursor-pointer text-sm text-white px-4 py-2 rounded"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={methods.handleSubmit(onSubmitFrom)}
                    className="bg-[#012555]  transition-all duration-300 ease-in-out   hover:bg-purple-400  hover:cursor-pointer text-sm text-white px-4 py-2 rounded"
                  >
                    Confirm
                  </button>
                )}
              </div>}
              <div className="flex w-full items-center gap-2  justify-center">by 
                <a href="https://hamzapab.netlify.app/" target="blanc" 
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-[#5ff1d0] cursor-pointer">
                   <img  src="./public/favicon.ico" alt="favicon" />
                </a>
              </div>
      </div>
    </div>
  );
}

export default App;
