import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../app/sidebarSlice";
import {
  FaHome,
  FaBox,
  FaClipboardList,
  FaQuestionCircle,
  FaSignOutAlt,
  FaCashRegister,
  FaUsers,
  FaUserTie,
  FaUserClock,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa";

export default function Sidebar({ onLogout }) {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "الرئيسية", label: "الرئيسية", icon: <FaHome />, children: [] },
    {
      key: "المبيعات",
      label: "المبيعات",
      icon: <FaClipboardList />,
      children: [
        "إدارة الفواتير",
        "إنشاء فاتورة",
        "الفواتير المرتجعة",
        "تعديل فاتورة",
        "مراجعة الفواتير",
      ],
    },
    {
      key: "نقاط البيع",
      label: "نقاط البيع",
      icon: <FaCashRegister />,
      children: ["بدء البيع", "الجلسات", "بيع للكافيه", "إضافة منتجات لفواتير مفتوحة"],
    },
    {
      key: "العملاء",
      label: "العملاء",
      icon: <FaUsers />,
      children: ["إدارة العملاء", "إضافة عميل جديد"],
    },
    {
      key: "المخزون",
      label: "المخزون",
      icon: <FaBox />,
      children: ["إضافة منتج", "إضافة جهاز", "إضافة ترابيزة", "إدارة المخزون"],
    },
    {
      key: "الموظفين",
      label: "الموظفين",
      icon: <FaUserTie />,
      children: ["إضافة موظف", "تحديد صلاحيات الموظف"],
    },
    {
      key: "الحضور والانصراف",
      label: "الحضور والانصراف",
      icon: <FaUserClock />,
      children: ["سجلات الحضور", "أيام الحضور", "تسجيل إجازة"],
    },
    {
      key: "الرواتب",
      label: "الرواتب",
      icon: <FaMoneyBillWave />,
      children: ["السلف", "الرواتب"],
    },
    {
      key: "التقارير",
      label: "التقارير",
      icon: <FaFileAlt />,
      children: ["تقارير يومية", "تقارير شهرية", "تقارير مفصلة"],
    },
    {
      key: "المساعدة",
      label: "المساعدة",
      icon: <FaQuestionCircle />,
      children: [],
    },
  ];

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* overlay يظهر بس في الموبايل */}
      {isMobile && isOpen && (
        <div
          onClick={() => dispatch(toggleSidebar())}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{
          width: 220,
          background: "#f9f9f9",
          height: "100vh",
          padding: 20,
          borderLeft: "1px solid #ddd",
          position: isMobile ? "fixed" : "relative", // موبايل fixed، كبير relative
          top: 0,
          right: isMobile
            ? isOpen
              ? 0
              : "-240px" // في الموبايل slide من اليمين
            : isOpen
            ? 0
            : "-240px", // في الكبير يختفي برضه
          transition: "right 0.3s ease",
          zIndex: 10,
          overflow: "hidden",
          zIndex:55555
        }}
      >
        {/* الشعار */}
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div className="mark">C</div>
          <div style={{ fontWeight: 700 }}>Coding Corner</div>
        </div>

        {/* القائمة */}
        <nav className="menu-container" style={{ marginTop: 20 }}>
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.key}>
                <div
                  className={`menu-item ${openSection === item.key ? "active" : ""}`}
                  onClick={() => toggleSection(item.key)}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <span className="menu-label">{item.label}</span>
                  {item.children.length > 0 && (
                    <span className="arrow">{openSection === item.key ? "▲" : "▼"}</span>
                  )}
                </div>
                {item.children.length > 0 && (
                  <ul
                    className={`submenu ${openSection === item.key ? "open" : ""}`}
                    style={{
                      maxHeight: openSection === item.key ? "500px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.children.map((child, i) => (
                      <li
                        key={i}
                        className="submenu-item"
                        onClick={() => alert(`انتقلت إلى ${child}`)}
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* الأسفل */}
        <div className="bottom" style={{ marginTop: 20 }}>
          <hr />
          <div style={{ marginTop: 12 }}>
            <div className="small">مستخدم تجريبي</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <button className="logout-btn" onClick={onLogout}>
                <FaSignOutAlt /> تسجيل خروج
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
