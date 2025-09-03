// import React from "react";

// export default function Stocks() {
//   // بيانات وهمية للأجهزة
//   const devices = {
//     total: 20,
//     open: 5,
//     busy: 12,
//   };

//   // بيانات وهمية للترابيزات
//   const tables = {
//     total: 15,
//     available: 7,
//     reserved: 8,
//   };

//   // فانكشن لعمل صف مع خط فاصل
//   const StatRow = ({ label, value, color }) => (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//       <span className="small" style={{ color: color || "inherit" }}>{label}</span>
//       <span style={{ fontWeight: 700 }}>{value}</span>
//     </div>
//   );

//   const Divider = () => (
//     <hr style={{ margin: "6px 0", border: "0", borderTop: "1px solid #e0e0e0" }} />
//   );

//   return (
//     <div style={{ display: "grid", gap: 12 }}>
//       {/* بانل الأجهزة */}
//       <div className="side-panel">
//         <div className="h-title">إحصائيات الأجهزة</div>
//         <div style={{ marginTop: 12 }}>
//           <StatRow label="إجمالي الأجهزة" value={devices.total} />
//           <Divider />
//           <StatRow label="الأجهزة المفتوحة" value={devices.open} color="green" />
//           <Divider />
//           <StatRow label="الأجهزة المشغولة" value={devices.busy} color="red" />
//         </div>
//       </div>

//       {/* بانل الترابيزات */}
//       <div className="side-panel">
//         <div className="h-title">إحصائيات الترابيزات (كافيه)</div>
//         <div style={{ marginTop: 12 }}>
//           <StatRow label="إجمالي الترابيزات" value={tables.total} />
//           <Divider />
//           <StatRow label="المتاحة" value={tables.available} color="green" />
//           <Divider />
//           <StatRow label="المحجوزة" value={tables.reserved} color="orange" />
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // بيانات وهمية للكافيه
  const cafeDevices = { total: 10, open: 3, busy: 6 };
  const cafeTables = { total: 8, available: 4, reserved: 4 };
  const cafeRevenue = [200, 300, 250, 400, 350, 500];

  // بيانات وهمية للبلايستيشن
  const psDevices = { total: 12, open: 4, busy: 7 };
  const psRevenue = [150, 250, 200, 300, 280, 400];

  // فانكشن لعمل صف مع خط فاصل
  const StatRow = ({ label, value, color }) => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}>
        <span className="small" style={{ color: color || "inherit" }}>{label}</span>
        <span style={{ fontWeight: 700 }}>{value}</span>
      </div>
      <hr style={{ margin: 0, border: "0", borderTop: "1px solid #e0e0e0" }} />
    </>
  );

  return (
    <div   style={{ display: "grid", gap: 16 }}>
      {/* بانل كافيه */}
      <div className="side-panel">
        <div className="h-title">كافيه</div>

        {/* الأجهزة */}
        {/* <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>الأجهزة</div>
          <StatRow label="إجمالي الأجهزة" value={cafeDevices.total} />
          <StatRow label="الأجهزة المفتوحة" value={cafeDevices.open} color="green" />
          <StatRow label="الأجهزة المشغولة" value={cafeDevices.busy} color="red" />
        </div> */}

        {/* الترابيزات */}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>الترابيزات</div>
          <StatRow label="إجمالي الترابيزات" value={cafeTables.total} />
          <StatRow label="المتاحة" value={cafeTables.available} color="green" />
          <StatRow label="المحجوزة" value={cafeTables.reserved} color="orange" />
        </div>

        {/* الإيرادات */}
        {/* <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>الإيرادات</div>
          <div style={{ height: 150 }}>
            <Bar
              data={{
                labels: ["6 ص", "9 ص", "12 م", "3 م", "6 م", "9 م"],
                datasets: [
                  {
                    label: "إيرادات اليوم",
                    data: cafeRevenue,
                    backgroundColor: "rgba(111,70,214,0.6)",
                  },
                ],
              }}
              options={{ plugins: { legend: { display: false } }, responsive: true }}
            />
          </div>
        </div> */}
      </div>

      {/* بانل بلايستيشن */}
      <div className="side-panel">
        <div className="h-title">بلايستيشن</div>

        {/* الأجهزة */}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>الأجهزة</div>
          <StatRow label="إجمالي الأجهزة" value={psDevices.total} />
          <StatRow label="الأجهزة المفتوحة" value={psDevices.open} color="green" />
          <StatRow label="الأجهزة المشغولة" value={psDevices.busy} color="red" />
        </div>

        {/* الإيرادات */}
        {/* <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>الإيرادات</div>
          <div style={{ height: 150 }}>
            <Line
              data={{
                labels: ["6 ص", "9 ص", "12 م", "3 م", "6 م", "9 م"],
                datasets: [
                  {
                    label: "إيرادات اليوم",
                    data: psRevenue,
                    borderColor: "rgba(255,99,132,1)",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={{ plugins: { legend: { display: false } }, responsive: true }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
