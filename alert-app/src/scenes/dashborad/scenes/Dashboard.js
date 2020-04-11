import React from "react";
import Navbar from "../components/Navbar";
import AlertTable from "../components/AlertTable";

const Dashboard = () => {
  return (
    <div className="bg-grey">
      <Navbar />
      <AlertTable />
    </div>
  );
};

export default Dashboard;
