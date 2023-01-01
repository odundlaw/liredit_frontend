import React from "react";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="h-12 bg-white w-full border-b-slate-900 flex justify-between items-center px-4">
      Header
    </nav>
  );
};

export default Navigation;
