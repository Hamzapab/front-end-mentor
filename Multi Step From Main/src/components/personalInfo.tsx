import { clsx } from 'clsx';
import { useFormContext } from "react-hook-form";
import { ShakeInput } from '../aniamtedComponents/ShakInput';
import '../index.css'

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

const nameValidation = { required: true };

const emailValidation = {
  required: true,
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email"
  }
};

const numberValidation = {
  required: true,
  pattern: {
    value: /^\+?\d[\d\s-]{7,15}$/,
    message: "Enter a valid phone number"
  }
};

export function PersonalInfo(){ 
    const { register, formState: { errors } } = useFormContext<FormData>();


  return(
    <div className="step1">
      <h1 className="bld text-2xl text-[#032552] mb-3">Personal Info</h1>
      <p className="mid text-gray-500 mb-3">Please Provide your name, email address, and phone number</p>
      
        <label htmlFor="name" className="text-[#032552] ">Name</label>
        <ShakeInput className={clsx(
          " w-full border  border-gray-400 p-1.5 pl-4 mb-4 rounded-sm",
           {
            "border-red-600" : errors.name,
            "outline outline-red-600" : errors.name
           }
          )}
          id="name"
          autoComplete="name"
          type="text"
          hasError={!!errors.name}
          {...register("name", nameValidation)} 
          placeholder="e.g. Hamza CodeLi" 
        />
        {errors.name && <span className="block text-red-500 text-sm mt-[-13px] mb-3">Name is required</span>}

        <label htmlFor="email" className="text-[#032552] ">Email Address</label>
        <ShakeInput className={clsx(
          " w-full border  border-gray-400 p-1.5 pl-4 mb-4 rounded-sm",
           {
            "border-red-600" : errors.email,
            "outline outline-red-600" : errors.email
           }
          )}
          id="email"
          autoComplete="email"
          type="email"
          hasError={!!errors.email}
          {...register("email", emailValidation)}
          placeholder="e.g. Hamza@gmail.com" 
        />
          {errors.email && (  
            <span className="block text-red-500 text-sm mt-[-13px] mb-3">
              {errors.email.type === "required"
              ? "This field is required": errors.email.message}
            </span>
            )}
        <label htmlFor="tel" className="text-[#032552] ">Phone Number</label>
        <ShakeInput className={clsx(
          " w-full border  border-gray-400 p-1.5 pl-4 mb-4 rounded-sm",
           {
            "border-red-600" : errors.phoneNumber,
            "outline outline-red-600" : errors.phoneNumber
           }
          )}
          id="tel"
          autoComplete="tel"
          type="tel"
          hasError={!!errors.phoneNumber}
          {...register("phoneNumber", numberValidation)}
          placeholder="e.g. +213 788 38 29 39"

         />
          {errors.phoneNumber && (  
            <span className="block text-red-500 text-sm mt-[-13px] mb-3">
              {errors.phoneNumber.type === "required"
              ? "This field is required": errors.phoneNumber.message}
            </span>
            )}  
    </div>
  )
}
