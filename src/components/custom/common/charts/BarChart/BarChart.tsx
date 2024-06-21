/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBarChartProps } from "@/@types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart: React.FC<IBarChartProps> = ({ data, title }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend
  );

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          color: "#00000", // Set legend text color to black
        },
      },
      title: {
        display: true,
        text: title,
        color: "#00000",
        position: "top" as const,
        align: "start" as const,
        font: {
          size: 18,
          weight: "600",
        },
      },
      font: {
        size: 12, // Set a default font size for other text elements
        family: "Poppins",
        weight: "600",
        style: "normal",
        color: "#00000", // Set text color to pitch black
      },
    },
    devicePixelRatio: window.devicePixelRatio || 1,
    maintainAspectRatio: false, // This allows the chart to have a dynamic aspect ratio
    scales: {
      x: {
        grid: {
          display: false,
          ticks: {
            color: "#00000",
          },
        },
      },
      y: {
        grid: {
          display: false,
          ticks: {
            color: "#00000",
          },
        },
      },
    },
  };

  return (
    <Bar
      className="chart-container"
      options={options}
      data={data}
      style={{
        width: "750px",
        height: "17rem",
        paddingLeft: "2rem",
      }}
    />
  );
};

export default BarChart;
