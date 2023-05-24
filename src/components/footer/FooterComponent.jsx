import React from "react";
import WaveFooter from "../materials/WaveFooter";
import { FaInstagram } from "react-icons/fa";
import { logoUpPutih, logoHmikTextPutih } from "@/constant/ImageUrl";

const FooterComponent = () => {
  return (
    <footer
      className="text-white w-full"
      style={{ backgroundColor: "#004289" }}
    >
      <WaveFooter />

      <div className="container mx-auto py-8 md:px-8">
        <div className="mx-2 md:flex md:justify-between md:px-12">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="flex">
              <img
                src={logoUpPutih}
                className="h-12 md:h-20 md:mr-3"
                alt="logo up pth"
              />
              <img
                src={logoHmikTextPutih}
                className="h-12 ml-2 md:h-20 md:mr-3"
                alt="txt hmik up pth"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mr-8 md:mb-0">
              <h2 className="mb-4 font-bold text-white font-poppins">Alamat</h2>
              <ul className="font-medium text-white font-poppins">
                <li className="mb-2">
                  Jl. Teuku Nyak Arief, Simprug,
                  <br />
                  Kebayoran Lama, Jakarta 12220.
                  <br />
                  info@universitaspertamina.ac.id
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white font-poppins">
                Contact
              </h2>
              <ul className="font-medium text-white font-poppins">
                <li className="flex items-center">
                  <FaInstagram className="mr-2 text-[40px]" />
                  {/* <img className="mr-2" src={`/img/Vector.png`} alt="" /> */}
                  <div>hmik.up</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
