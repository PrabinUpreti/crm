/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPieChartProps } from "@/@types";
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChart: React.FC<IPieChartProps> = ({ title, data }) => {
  ChartJS.register(ArcElement, Tooltip, Title, Legend);
  const options: any = {
    plugins: {
      title: {
        position: "top" as const,
        align: "start" as const,
        display: true,
        text: title,
        font: {
          size: 20,
          weight: "600",
        },
        color: "#00000",
      },
      legend: {
        display: true,
        position: "right",
        color: "#00000",
        font: {
          size: 18,
          weight: "600",
        },

        // You can change the position as needed
      },
      font: {
        size: 12, // Set a default font size for other text elements
        family: "Poppins",
        weight: "600",
        style: "normal",
        color: "#00000", // Set text color to pitch black
      },
      devicePixelRatio: window.devicePixelRatio || 1,
      maintainAspectRatio: false,
      // This allows the chart to have a dynamic aspect ratio
    },
  };

  return (
    <Doughnut className="chart-container " options={options} data={data} />
  );
};

export default PieChart;
