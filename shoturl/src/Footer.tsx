import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-[#232127] p-10 lg:px-20" aria-label="Footer">
      <div className="container mx-auto text-xl text-[#bfbfbf] text-center flex flex-col items-center lg:flex-row lg:items-start justify-between">
        <img
          className="w-25 mb-10"
          src="/assets/images/logo_white.png"
          alt="ShortURL Logo"
          role="img"
        />

        <nav aria-label="Features">
          <ul className="flex flex-col items-center lg:items-start gap-3 mb-5">
            <li className="font-bold text-white mb-4" tabIndex={0}>Features</li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Link Shortening
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Branded Links
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Analytics
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Resources">
          <ul className="flex flex-col items-center lg:items-start gap-3 mb-5">
            <li className="font-bold text-white mb-4" tabIndex={0}>Resources</li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Developers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Support
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <ul className="flex flex-col items-center lg:items-start gap-3 mb-5">
            <li className="font-bold text-white mb-4" tabIndex={0}>Company</li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#2acfcf] transition-colors duration-300"
                tabIndex={0}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-8 my-10 lg:mt-0" aria-label="Social media links" role="navigation">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
            title="Facebook"
          >
            <FaFacebookSquare
              className="text-white hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
              focusable="false"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
            title="Twitter"
          >
            <FaTwitter
              className="text-white hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
              focusable="false"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
            title="Instagram"
          >
            <FaInstagram
              className="text-white hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
              focusable="false"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://pinterest.com"
            aria-label="Pinterest"
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
            title="Pinterest"
          >
            <FaPinterest
              className="text-white hover:cursor-pointer hover:text-[#2acfcf] transition-colors duration-300"
              size={25}
              focusable="false"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
