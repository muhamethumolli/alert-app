import React from "react";

const Dashboard = () => {
  return (
    <div class="bg-grey">
      <div class="nav-container">
        <nav class="nav">
          <div class="nav-logo">
            <a>
              PWD<span class="font-normal">RESET</span>
            </a>
          </div>
          <div class="nav-name">
            <p class="name">Flamur Mavraj</p>
            <span class="circle">FM</span>
          </div>
          <div class="add">
            <span class="plus">+</span>
          </div>
        </nav>
      </div>
      <div class="table-container">
        <div class="table">
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
                <td class="method-col">On User Create</td>
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
