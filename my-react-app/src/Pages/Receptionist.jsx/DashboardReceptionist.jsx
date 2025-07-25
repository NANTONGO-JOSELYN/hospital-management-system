import React from "react";
import Chart from "../../components/Chart";
import TopStats from "../../components/TopStats";
import TopbarReceptionist from "../../components/TopbarReceptionist";
import PatientSatisfactionChart from "../../components/PatientSatisfactionChart";
import GenderDistributionChart from "../../components/GenderDistribution";
import SidebarReceptionist from "../../components/SidebarReceptionist";


const DashboardReceptionist = () => {
  return (
<div className="flex flex-col h-screen">
  {/* Topbar */}
  <div className="h-16">
    <TopbarReceptionist />
  </div>

  {/* Body: Sidebar + Content */}
  <div className="flex flex-1">
    {/* Sidebar */}
    <div className=" bg-white shadow">
      <SidebarReceptionist />
    </div>

    {/* Main Content */}
    <div className="flex-1 bg-gray-100 overflow-y-auto px-4 py-3 ">
      <h1 className="font-bold text-lg mb-3 mt-5">Welcome Jane!</h1>

      {/* Top Stats + Chart */}
      <div className="flex flex-col lg:flex-row gap-6 mb-4 mt-9">
        <div className="w-full lg:1/2 ">
        <TopStats />
        
        </div>
        <div className="w-full lg:1/2">
        <Chart />
        </div>
        {/* <TopStats /> */}
       
      </div>


      {/* Patient Satisfaction + Gender Chart */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div  className="w-full lg:1/2" >
          <PatientSatisfactionChart />
        </div>
        
        <div  className="w-full lg:1/2">
        <GenderDistributionChart />
        </div>
       
       
      </div>
    </div>
  </div>
</div>
 
    
  );
};

export default DashboardReceptionist;
