import Navbar from "@/components/Navbar";
import Sidbar from "@/components/Sidbar";
import React from "react";

const DashboardLayout = ({children}) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidbar />
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
         
            {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
