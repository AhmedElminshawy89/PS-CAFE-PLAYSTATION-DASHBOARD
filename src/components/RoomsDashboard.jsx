import React from "react";
import { FaGamepad, FaCoffee } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
const products = [
  {
    id: 1,
    name: "ترابيزه رقم 1",
    type: "furniture",
    price: 250,
    inStock: true,
    orders: 3, // عدد الطلبات
    time: null,
    icon: <FaCoffee />,
  },
  {
    id: 2,
    name: "جهاز بلايستيشن 5",
    type: "electronics",
    price: 500,
    inStock: false,
    orders: null,
    time: 120,
    icon: <FaGamepad />,
  },
  {
    id: 3,
    name: "ترابيزه رقم 2",
    type: "furniture",
    price: 120,
    inStock: true,
    orders: 5,
    time: null,
    icon: <FaCoffee />,
  },
  {
    id: 4,
    name: "جهاز بلايستيشن 4",
    type: "electronics",
    price: 350,
    inStock: true,
    orders: null,
    time: 90,
    icon: <FaGamepad />,
  },
];

export default function RoomsDashboard() {
  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        padding: 20,
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
          }}
        >
          {/* أيقونة */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              backgroundColor:
                product.type === "electronics" ? "#E0F7FA" : "#FFF3E0",
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                color: product.type === "electronics" ? "#00796B" : "#F57C00",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {product.icon}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div style={{ padding: "16px 20px", flex: 1 }}>
            <div style={{display:'flex',justifyContent:'space-between'}}>

            <h3
              style={{
                margin: "0 0 8px",
                fontSize: 18,
                fontWeight: "700",
                color: "#333",
                textAlign: "start",
              }}
            >
              {product.name}
            </h3>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: "600",
                  backgroundColor: product.inStock ? "#C8E6C9" : "#FFCDD2",
                  color: product.inStock ? "#256029" : "#C62828",
                }}
              >
                {product.inStock ? "متاح " : "غير متاح"}
              </span>
            </div>
            </div>


<div style={{display:'flex',justifyContent:'space-between'}}>

            <p
              style={{
                margin: "0 0 12px",
                fontSize: 20,
                fontWeight: "700",
                color: "#00796B",
                textAlign: "center",
              }}
            >
               {product.price} جنيه
            </p>

            {/* لو ترابيزة → عدد الطلبات */}
            {product.orders !== null && (
              <div
                style={{
                  marginBottom: 12,
                  padding: "6px 12px",
                  borderRadius: 10,
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                 عدد الطلبات: {product.orders}
              </div>
            )}

            {/* لو بلايستيشن → الوقت */}
            {product.time && (
              <div
                style={{
                  marginBottom: 12,
                  padding: "6px 12px",
                  borderRadius: 10,
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                 المدة: {product.time} دقيقة
              </div>
            )}


</div>

              <button
                style={{
                  marginTop: "auto",
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: 12,
                  border: "none",
                  backgroundColor: "#00796B",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#004D40")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#00796B")
                }
                disabled={!product.inStock}
              >
                {!product.inStock&&(<IoLockClosedOutline style={{fontSize:'22px' , marginLeft:''}}/>)} بدأ الحجز 
              </button>
          </div>
        </div>
      ))}
    </div>
  );
}
