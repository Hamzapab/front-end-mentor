import { Button } from "./components/ui/button";
import Navbar from "./Navbar";
import Statis from "./statistics";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function Home() {
  type FormData = z.infer<typeof formSchema>;
  type UrlResult = { original: string; short: string };

  const [shortUrls, setShortUrl] = useState<UrlResult[]>(() => {
    const stored = localStorage.getItem("shortenedUrls");
    return stored ? JSON.parse(stored) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);


  useEffect(() => {
  localStorage.setItem("shortenedUrls", JSON.stringify(shortUrls));
}, [shortUrls]);

  const formSchema = z.object({
    url: z
      .string()
      .min(1, { message: "Please add a link" }) // Handles empty input
      .url("Invalid URL"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  async function shortenUrl(data: FormData) {
    const response = await fetch(
      "./netlify/functions/shorten-url",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: data.url }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to shorten URL");
    }

    const result = await response.json();
    return result.result_url;
  }

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const result = await shortenUrl(data);
      setShortUrl((prev) => {
        const exists = prev.some((item) => item.original === data.url);

        if (!exists) {
          return [...prev, { original: data.url, short: result }];
        }

        return prev;
      });
    } catch (err) {
      console.error("Error shortening URL:", err);
    }finally {
    setIsLoading(false);
  }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 4000);
  };
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Secction */}
      <div className="hero bg-white py-10 pb-40">
        <div className=" mx-auto flex flex-col md:flex-row items-center">
          <div
            className="w-full md:flex-1 h-[350px] md:h-auto min-h-[300px] md:order-1
        bg-[url('/assets/images/illustration-working.svg')] 
        bg-cover md:bg-contain bg-no-repeat bg-left md:bg-right rounded-lg"
          ></div>
          <div className="text-center md:text-start  p-6 md:px-20 md:flex-1">
            <h1 className="font-bold text-3xl md:text-7xl md:leading-[1.4] text-[#35323e]">
              More than just shorter links
            </h1>
            <p className="text-[#bfbfbf] font-medium py-4 md:text-xl">
              Build your brand's recognition and got detailed insights on how
              your links performing
            </p>
            <Button
              variant="default"
              className="rounded-3xl px-7 py-5 md:text-2xl md:px-9 md:py-6  font-bold bg-[#2acfcf] cursor-pointer"
            >
              <a href="/#shorten">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
      {/* SHorten Section */}
      <div id="shorten" className="shorten  -mt-20 p-6  py-8 md:px-20 ">
        <div className="container relative bg-[#3b3054] p-6 py-8 md:p-12 rounded-lg">
          <div
          className="md:hidden w-[70%] h-[67%]  absolute top-0 right-0 -z-0
        bg-[url('/assets/images/bg-shorten-mobile.svg')] bg-cover bg-left rounded-lg"
        ></div>
          <div
          className="hidden md:block w-[100%] h-[100%]  absolute top-0 right-0 -z-0
        bg-[url('/assets/images/bg-shorten-desktop.svg')] bg-cover bg-center rounded-lg"
        ></div>
        <form onSubmit={handleSubmit(onSubmit)} className="relative z-1 flex flex-col md:flex-row items-center md:items-start gap-3.5 md:gap-10">
          <div className="flex-1 relative w-full md:w-auto">
            <input
            type="url"
            {...register("url")}
            className={`border   rounded bg-white text-[#3b3054] px-4 py-3 w-full
             ${
               errors.url
                 ? "border-red-500 italic outline outline-red-500"
                 : "border-gray-300"
             }`}
            placeholder="Shorten a Link here..."
          />
          <div className="absolute -bottom-6 left-0">
            {errors.url && (
              <p className="text-red-500 text-sm mt-1">{errors.url.message}</p>
            )}
          </div>
          </div>
          <Button
            type="submit"
            className="mt-7 md:mt-0  py-6 min-w-48 bg-[#2acfcf] w-full md:w-auto text-lg font-bold
              cursor-pointer  hover:bg-[#2acfcf]/85
            "
          >
            
        {isLoading ? (
          <Loader2 className="animate-spin mr-2 h-5 w-5" />
        ) : (
          "Shorten It!"
        )}
          </Button>
        </form>
        </div>
      </div>
      {/* Result section */}
      <div className="space-y-4 mt-6 p-6 md:px-20">
        <div className="container mx-auto">
          {shortUrls.map((link, idx) => (
          <div key={idx} className="bg-white rounded-lg py-5 mb-5">
            <p className="text-[#35323e] font-medium pb-3 px-4 w-full border-b  border-b-[#bfbfbf]">
              {link.original}
            </p>
            <div className="px-4 md:flex justify-between items-center ">
              <p className="text-[#2acfcf] font-medium w-full my-4 md:w-auto text-left break-all">
                {link.short}
              </p>
              <Button
                className={`w-full md:w-auto py-2  px-6 font-semibold ${
                  copiedUrl === link.short ? "bg-[#3b3054]" : "bg-[#2acfcf]"
                }`}
                onClick={() => handleCopy(link.short)}
              >
                {copiedUrl === link.short ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        ))}
        </div>
      </div>
      {/* Statistic */}
      <Statis />
      {/* Boost */}
      <div className="relative bg-[#3b3054] py-42 md:py-20 z-1">
        <div
          className="w-[100%] h-[100%]  absolute top-0 right-0 -z-1
        bg-[url('/assets/images/bg-boost-desktop.svg')] bg-cover bg-no-repeat bg-center "
        ></div>
        <div className="container mx-auto text-center ">
          <h2 className="text-5xl text-white font-bold mb-12">Boost Your links today</h2>
           <Button
              variant="default"
              className="rounded-4xl px-12 py-8 text-2xl font-bold bg-[#2acfcf] cursor-pointer"
            >
              Get Started
            </Button>
        </div>
      </div>
    </>
  );
}
