import React from "react";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="h-screen fixed bg-white w-[22%] border border-t-gray-200 p-4">
      SideBar
    </div>
  );
};

export default SideBar;
