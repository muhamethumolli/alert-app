import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="bg-grey">
      <Navbar />
      <div className="table-container">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>EVENT</th>
                <th>METHOD</th>
                <th>VALUE</th>
                <th>CREATED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>On User Create</td>
                <td>Email</td>
                <td>flamur.mavraj@ornio.no</td>
                <td>1 days ago</td>
              </tr>
              <tr>
                <td>On User Create</td>
                <td>Email</td>
                <td>flamur.mavraj@ornio.no</td>
                <td>1 days ago</td>
              </tr>
              <tr>
                <td className="method-col">On User Create</td>
                <td>Email</td>
                <td>flamur.mavraj@ornio.no</td>
                <td>1 days ago</td>
              </tr>
              <tr>
                <td>On User Create</td>
                <td>Email</td>
                <td>flamur.mavraj@ornio.no</td>
                <td>1 days ago</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
