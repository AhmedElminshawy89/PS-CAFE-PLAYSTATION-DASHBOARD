import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartPanel() {
  const [period, setPeriod] = useState("اليوم");

  // بيانات وهمية حسب الفترة
  const dataByPeriod = {
    اليوم: {
      labels: ["8 ص", "10 ص", "12 م", "2 م", "4 م", "6 م"],
      values: [200, 300, 250, 400, 350, 500],
    },
    "هذا الأسبوع": {
      labels: ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
      values: [1200, 1500, 1800, 1600, 2000, 1900, 2200],
    },
    "هذا الشهر": {
      labels: ["الأسبوع 1", "الأسبوع 2", "الأسبوع 3", "الأسبوع 4"],
      values: [5000, 7000, 6500, 8000],
    },
  };

  const chartData = {
    labels: dataByPeriod[period].labels,
    datasets: [
      {
        label: "النمو الكلي",
        data: dataByPeriod[period].values,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div>
          <div className="h-title">النمو الكلي</div>
          <div className="small">$2,324.00</div>
        </div>
        <div>
          <select
            style={{ padding: 8, borderRadius: 8 }}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>اليوم</option>
            <option>هذا الأسبوع</option>
            <option>هذا الشهر</option>
          </select>
        </div>
      </div>

      <div style={{ height: 320 }}>
        <Line data={chartData} options={options} />
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 12,
          alignItems: "center",
        }}
      >
        <div className="small">الاستثمار</div>
        <div className="small">الخسارة</div>
        <div className="small">الربح</div>
      </div> */}
    </div>
  );
}
