import type { FormData } from "./Form";
import "../index.css";

export function FormMessage(data: FormData) {
  function generateRandomCode(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }
  return (
    <div className="max-w-[500px] mx-auto">
      <h1 className="text-3xl md:text-4xl text-center mb-5 mt-3">
        Congrats,
        <span className="font-bold bg-gradient-to-r from-[#f37362] to-[#ffffff] bg-clip-text text-transparent">
          {data.name}
        </span>{" "}
        Your ticket is ready.
      </h1>
      <p className="text-center md:text-lg text-gray-300 font-bold mb-5">
        We've emailed your ticket to{" "}
        <span className="text-[#f37362]">{data.email} </span>
        and will send updates in the run up to the event.
      </p>
      <div className="ticket relative mt-15 max-w-[400px] w-full min-h-[170px] p-[25px_25px] mx-auto">
        <img
          className="absolute inset-0 w-full h-full 
              object-contain z-0 pointer-events-none"
          src="/assets/images/pattern-ticket.svg"
          alt=""
        />
        <div className="ticketCode absolute rotate-270 text-gray-400 font-bold right-5 top-1/2 -translate-y-1/2">
          {generateRandomCode()}
        </div>
        <img
          className="w-[150px] md:w-[170px] mb-1"
          src="/assets/images/logo-full.svg"
          alt="logo"
        />
        <p className="text-gray-400 text-sm ps-8">Jan 31, 2025 / Austin, TX</p>
        <div className="flex items-center gap-2 mt-7">
          <img
            className="w-10 h-10 rounded-lg"
            src={`/assets/images${data.file.path.slice(1)}`}
            alt="avatar"
          />
          <div>
            <span>{data.name}</span>
            <div className="flex items-center gap-0.5">
              <img
                className="w-4"
                src="/assets/images/icon-github.svg"
                alt="logo"
              />
              <span className="text-gray-400">{data.username}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
