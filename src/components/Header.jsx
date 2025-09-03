import { CiDark, CiLight } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { toggleSidebar } from "../app/sidebarSlice";
import { useDispatch } from "react-redux";

export default function Header({ theme, setTheme, onLogout }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* الجزء الشمال */}
      <div
        className="left-controls"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        {/* أيقونة القائمة (الهامبرجر) */}
        <button
style={{
  borderRadius: "12px",
  border: "0px",
  background: "linear-gradient(90deg, var(--primary), var(--accent))",
  cursor: "pointer",
  fontSize: "18px",
  color: "rgb(255, 255, 255)",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}
        onClick={() => dispatch(toggleSidebar())}

        >
          <FaBars />
        </button>

        {/* Avatar */}
        <div style={{ position: "relative" }} ref={menuRef}>
          <img
            src="https://i.pravatar.cc/40" // صورة افتراضية
            alt="avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid var(--primary)",
            }}
            onClick={() => setOpenMenu(!openMenu)}
          />

          {/* القائمة */}
          {openMenu && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "-100px",
                background: "var(--panel)", // الخلفية من الـ CSS variable
                borderRadius: "10px",
                boxShadow: "var(--shadow)",
                padding: "8px",
                minWidth: "150px",
                zIndex: 100,
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li
                  style={{ padding: "8px", cursor: "pointer" }}
                  onClick={() => alert("الملف الشخصي")}
                >
                  الملف الشخصي
                </li>
                <li
                  style={{ padding: "8px", cursor: "pointer" }}
                  onClick={onLogout}
                >
                  تسجيل الخروج
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Controls (التاريخ + زرار الداكن/الفاتح) */}
      <div
        className="controls"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <div
          style={{
            padding: 8,
            borderRadius: 10,
            background: "linear-gradient(90deg,var(--primary),var(--accent))",
            color: "#ffffff",
            fontWeight: "700",
            boxShadow: "var(--shadow)",
            height: "40px",
          }}
        >
          {new Date().toLocaleDateString("ar-EG")}
        </div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          style={{
  borderRadius: "12px",
  border: "0px",
  background: "linear-gradient(90deg, var(--primary), var(--accent))",
  cursor: "pointer",
  fontSize: "28px",
  color: "rgb(255, 255, 255)",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
          }}
        >
          {theme === "light" ? <CiDark /> : <CiLight />}
        </button>
      </div>
    </div>
  );
}
