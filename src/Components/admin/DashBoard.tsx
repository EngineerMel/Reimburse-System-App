import React from "react";
import SideBar from "./SideBar";

export interface DashBoardProps {}

const DashBoard: React.SFC<DashBoardProps> = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <SideBar />
    </div>
  );
};

export default DashBoard;
