import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer bg-[#232127] p-10 md:px-20">
      <div className="container mx-auto text-xl text-[#bfbfbf] text-center flex flex-col items-center md:flex-row md:items-start justify-between">
        <img
          className="w-25 mb-10"
          src="/src/assets/images/logo_white.png"
          alt="Logo"
        />
        <ul className="flex flex-col items-center md:items-start gap-3 mb-5">
          <li className="font-bold text-white mb-4">Features</li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Link Shortening
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Branded Links
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Analytics
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center md:items-start gap-3 mb-5">
          <li className="font-bold text-white mb-4">Resources</li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Developers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Support
            </a>
          </li>
        </ul>

        <ul className="flex flex-col items-center md:items-start gap-3 mb-5">
          <li className="font-bold text-white mb-4">Company</li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-[#2acfcf] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-8 my-10 md:mt-0">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare
              className="text-white  hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
            />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter
              className="text-white  hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
            />
          </a>

          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              className="text-white  hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
            />
          </a>

          <a
            href="https://pinterest.com"
            aria-label="Pinterest"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterest
              className="text-white hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
