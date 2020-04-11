import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import AlertTable from "../components/AlertTable";
import AlertModal from "../components/AlertModal";

const Dashboard = () => {
  return (
    <div className="bg-grey">
      <Navbar />
      <AlertTable />
      <Switch>
        <Route path="/dashboard/add" component={AlertModal} />
      </Switch>
    </div>
  );
};

export default Dashboard;
