import React from "react";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center content-center flex-col pt-4">
        <hr className="bg-gray-400 opacity-50 outline-none border-none h-px w-4/5 mx-auto" />
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <p className="font-inter text-sm normal-case">
            {" "}
            Copyright {year} page by Marko Web
          </p>
        </div>
      </div>
    </div>
  );
}
