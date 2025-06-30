import { clsx } from 'clsx';
import '../index.css'


type StepItem = {
  stepNumber: number;
  stepTitle: string;
};

type StepperProps = {
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (step: number) => void;
};

export function Stepper({steps,currentStep} : StepperProps){
    return(
      <ul className="stepper flex md:flex-col md:w-[240px] md:pl-4 gap-5 md:gap-7 justify-center  text-white">
         {steps.map((step) => (
        <li
          key={step.stepNumber}
          className='md:flex items-center gap-4'
        >
        <div className={clsx(
           "border border-white rounded-full w-8 h-8 flex justify-center items-center",
        {
          "bg-[#bddffa] text-black": step.stepNumber === currentStep,
          "bg-none": step.stepNumber < currentStep,
        }
      )}
      >{step.stepNumber}</div>
      <div>
         <p className='text-gray-400 reg  text-sm uppercase'>Step {step.stepNumber}</p>
         <p className='text-white bld uppercase'>{step.stepTitle}</p>
      </div>
    </li>
  ))}
</ul>
    )
}




