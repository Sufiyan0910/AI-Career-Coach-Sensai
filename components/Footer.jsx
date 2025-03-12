import React from "react";
import { BsX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-row justify-between items-center px-32">
        {/* Contact Information */}
        <div className="min-h-[100px] text-white py-8 px-4 col-span-2 sm:col-auto ">
          <p className="">
            Phone:{" "}
            <a
              href="tel: +91 9137460802"
              className="hover:text-blue-300 hover:underline"
            >
              +91 9137460802
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:sufiyankhann2027@gmail.com"
              className="hover:text-blue-300 hover:underline"
            >
              sufiyankhann2027@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="">
          <div className="space-x-4 items-center justify-center text-white py-8 px-4 col-span-2 sm:col-auto">
            <a
              href="https://github.com/Sufiyan0910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
              aria-label="GitHub"
            >
              <FaGithub className="fs-2 text-3xl inline-block hover:text-gray-500 transition-colors hover:scale-105 duration-200" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100012829745857"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
              aria-label="Facebook"
            >
              <FaFacebook className="fs-2 text-3xl inline-block hover:text-blue-500 transition-colors hover:scale-105 duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/sufiyan-khan-b951411a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="fs-2 text-3xl inline-block hover:text-blue-600 transition-colors hover:scale-105 duration-200" />
            </a>
            <a
              href="https://www.instagram.com/sufiyan_0910/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
              aria-label="Instagram"
            >
              <FaInstagram className="fs-2 text-3xl inline-block hover:text-red-500 transition-colors hover:scale-105 duration-200" />
            </a>
            <a
              href="https://x.com/Sufiyan_0910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-3"
              aria-label="X (Twitter)"
            >
              <BsX className="fs-2 text-5xl inline-block hover:text-black transition-colors hover:scale-105 duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-white font-extrabold">
        © 2025 AI CareerCoach. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
