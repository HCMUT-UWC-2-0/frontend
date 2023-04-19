import { Option, Select } from "@material-tailwind/react";
import { capitalize } from "@utils/tools";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
);

export const LineChart: IComponent<{
  monitorType: string;
}> = ({ monitorType = "temperature" }) => {
  const [datasets, setDatasets] = useState<any>([]);
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: capitalize(monitorType),
          color: "black",
          font: {
            size: 20,
          },
        },
        suggestedMax: 100,
        suggestedMin: 0,
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          color: "black",
          font: {
            size: 20,
          },
        },
      },
      x: {
        title: {
          display: true,
          color: "black",
          font: {
            size: 16,
          },
        },
        ticks: {
          color: "black",
          font: {
            size: 16,
          },
        },
      },
    },
  };
  //TODO: fetch data here
  useEffect(() => {
    fetch("http://localhost:8000/api/data/list?page_id=2&page_size=100")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const array = data.map((d: any) => d.value);
        setDatasets(array);
      });
  }, []);
  const chartData = useMemo(
    () => ({
      labels: datasets.map((_: any, index: number) => index),
      datasets: [
        {
          label: "Khối lượng (tấn)",
          data: datasets,
          fill: false,
          tension: 0.1,
          borderColor: "#0E9CFF",
          backgroundColor: "rgba(14, 156, 255, 0.2)", // Set background color here
        },
      ],
    }),
    [datasets]
  );

  return (
    <div className="bg-white pt-8 pr-8">
      <Line data={chartData} options={options} />;
    </div>
  );
};
