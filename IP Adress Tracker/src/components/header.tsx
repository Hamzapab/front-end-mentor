import { useState } from 'react';
import type { FC } from 'react';
import { ChevronRight,OctagonAlert } from "lucide-react";
import type { IpifyResponse } from '../App'
import '../index.css'



interface HeaderProps {
  onSearch: (ip: string) => void;
  lcData : IpifyResponse | null;
}

const Header: FC<HeaderProps> = ({ onSearch,lcData }) => {
  const [ip, setIp] = useState('');
  const [error, setError] = useState(false);
  
  
  const isValidIP = (ip: string) => {
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$/;
  return ipRegex.test(ip);
};

  const handleSearch = () => {
  if (!isValidIP(ip)) {
    setError(true);
    return;
  }

  setError(false);
  onSearch(ip);
};

  return (
    <header
      className="w-full bg-cover min-h-[220px]  md:min-h-[200px]  max-h-[250px] bg-center text-white p-6 bg-mobile md:bg-desktop overflow-visible"
    >
      <div className="max-w-2xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">IP Address Tracker</h1>
        <div className=" w-full flex items-center justify-between bg-white rounded-lg overflow-hidden shadow-md max-w-lg mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className=" w-full flex items-center justify-between bg-white rounded-lg overflow-hidden shadow-md max-w-lg mx-auto"
        >
          <input
            type="text"
            placeholder="Enter IP address..."
            aria-label="IP address input"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            className="md:min-w-[400px] px-4 py-2 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="bg-black text-white px-4 py-2 hover:bg-gray-800"
             
            aria-label="Search IP address"
          >
            <ChevronRight />
          </button>
        </form>
        </div>
      </div>
      {(lcData && !error) &&
      <div className='dataBox bg-white  font-semibold  mt-7 pl-5 pr-5 flex flex-col md:flex-row max-w-[900px] mx-auto items-center md:items-start md:justify-around rounded-xl relative z-[100000] py-4 '>
        <div className='flex-1 text-center md:text-start md:pl-5 md:pr-13 '>
          <p className='text-gray-400  mb-0.5'>IP ADDRESS</p>
          <h3 className='text-black text-lg  mb-3'>{ lcData.ip}</h3>
        </div>
        <div className='flex-1 text-center md:text-start md:pl-3.5 md:pr-13'>
          <p className='text-gray-400  mb-0.5'>LOCATION</p>
           <h3 className='text-black text-lg  mb-3'>{  lcData.location.city}, {lcData.location.country}, {lcData.location.geonameId }</h3>
        </div>
        <div className='flex-1 text-center  md:text-start md:pl-3.5 md:pr-13 '>
          <p className='text-gray-400  mb-0.5'>TIMEZONE</p>
          <h3 className='text-black text-lg  mb-3'>{ lcData?.location.timezone}</h3>
        </div>
        <div className='flex-1 text-center md:text-start md:pl-3.5 '>
          <p className='text-gray-400  mb-0.5'>ISP</p>
          <h3 className='text-black text-lg  mb-3'>{ lcData.isp}</h3>
        </div>
      </div> }
      {error && (
      <div className="text-red-600 text-center bg-white  font-semibold gap-5 mt-7 pl-5 pr-5 flex  flex-row max-w-[900px] mx-auto items-center  justify-center rounded-xl relative z-[100000] py-4 ">
        <OctagonAlert /> Please enter a valid IPv4 address. <OctagonAlert />
      </div>)}
    </header>
  );
};

export default Header;
