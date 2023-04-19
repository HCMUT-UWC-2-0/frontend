/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

class Chart extends Component {
  render() {
    const chartData = [
      { time: "Jan", capacity: 30 },
      { time: "Feb", capacity: 70 },
      { time: "Mar", capacity: 80 },
      { time: "Apr", capacity: 20 },
      { time: "May", capacity: 10 },
    ];

    return (
      <LineChart width={1000} height={500} data={chartData}>
        <XAxis dataKey="time" stroke="#374151" />
        <YAxis dataKey="capacity" stroke="#374151" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          name="Line 1"
          type="monotone"
          dataKey="capacity"
          stroke="#6B7280"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}

export default Chart;
