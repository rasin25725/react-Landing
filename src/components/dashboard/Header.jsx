import React from "react";
import icon from "../../assets/react.svg";
function Header() {
  return (
    <div className="bg-[#000] flex justify-between items-center">
      <div className="flex items-center gap-4 p-4">
        <h1 className="w-[40px] h-[40px] mr-2">
          <img src={icon} alt="" width={100} height={100} />
        </h1>
        <h4 className="text-[#fff] text-[24px]">tailwindss</h4>
      </div>
      <div>
        <ul className="text-[#fff] flex gap-6">
          <li>Docs</li>
          <li>Components</li>
          <li>Blog</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
