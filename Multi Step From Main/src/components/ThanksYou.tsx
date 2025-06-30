import '../index.css';


export function ThanksYou() {

  return (
    <div className="Tahnks py-9 text-center">
        <img className='m-auto mb-5' src="assets/images/icon-thank-you.svg"/>
        <h2 className='bld text-[#032552] mb-3 text-2xl'>Thank you!</h2>
        <p className='mid text-sm text-gray-400'>Thanks for Confirming your subscription! <br></br> 
           We hope you have fun using our platform. If you ever 
           need support, please feel free to email us at <a  href="support@hamzacodeLi.com">support@hamzacodeLi.com</a>
        </p>
    </div>
  );
}
