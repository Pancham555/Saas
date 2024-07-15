import React from "react";
import AreaChartComponent from "./components/areaChart";
import PieChartComponent from "./components/pieChart";
import BarChartComponent from "./components/barChart";
import LongLineChartComponent from "./components/longLineChart";

export default function Analytics() {
  return (
    <div className="m-5 space-x-5 space-y-5 py-14">
      <LongLineChartComponent />
      <PieChartComponent />
      <div className="grid grid-cols-2 gap-5">
        <AreaChartComponent />
        <BarChartComponent />
      </div>
    </div>
  );
}
