import '../index.css'

export type HeaderProps = {
  showTitle: boolean;
};

export function Header({showTitle}:HeaderProps){
   return(
      <div className="header flex flex-col items-center text-center px-1">
         <img className='w-[150px] md:w-[250px] mb-3' src="/assets/images/logo-full.svg" alt="logo" />
        {!showTitle && 
          <>
          <h1 className='font-bold my-4 text-2xl'>Your Journey to Coding Conf 2025 Starts Here!</h1>
         <p className='text-gray-500 font-bold leading-5 text-lg'>
            Secure your spot at next year's biggest coding conference
         </p>
          </>
        }
      </div>
   )
}