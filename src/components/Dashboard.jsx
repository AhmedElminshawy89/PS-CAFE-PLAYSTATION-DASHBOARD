import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Cards from "./Cards";
import ChartPanel from "./ChartPanel";
import Stocks from "./Stocks";
import RoomsDashboard from "./RoomsDashboard";

export default function Dashboard({ onLogout, theme, setTheme }) {
  const sidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <>
      <style>{`
        .app {
          display: flex;
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        /* ---- main ---- */
        .main {
          flex: 1;
          transition: all 0.3s ease-in-out;
          position: absolute;
          top: 0;
          right: 250px; /* مكان الـ sidebar */
          left: 0;
          width: calc(100% - 250px);
        }

        /* لما يتقفل الـ sidebar */
        .main.sidebar-closed {
          right: 0;
          width:100%
        }

        /* ---- Responsive ---- */
        @media (max-width: 992px) {
          .main {
            position: relative;
            right: 0 !important;
            width: 100%;
          }

          /* overlay لما يفتح الـ sidebar */
          .app::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
            z-index: 99;
          }

          .app.sidebar-open::after {
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>

      <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Sidebar onLogout={onLogout} />
        <div className={`main ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <Header theme={theme} setTheme={setTheme} onLogout={onLogout} />
          <div className="sub-main">
            <Cards />
            <RoomsDashboard />
            <div className="content">
              <ChartPanel />
              <div className="container-stocks">
                <Stocks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
