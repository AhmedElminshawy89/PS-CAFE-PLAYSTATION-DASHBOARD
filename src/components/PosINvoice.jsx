import React, { useState } from "react";

const productsList = [
  { id: 1, name: "كنبة مريحة", price: 250 },
  { id: 2, name: "جهاز ألعاب", price: 500 },
  { id: 3, name: "ترابيزة خشب", price: 120 },
  { id: 4, name: "كنبة جلدية", price: 350 },
];

export default function POSInvoice() {
  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p))
    );
  };

  const subtotal = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const tax = subtotal * 0.14;
  const total = subtotal + tax;

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      {/* Products List */}
      <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: 16, padding: 20 }}>
        <h2>المنتجات</h2>
        {productsList.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 12,
              padding: 10,
              border: "1px solid #eee",
              borderRadius: 12,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onClick={() => addToCart(p)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            <span>{p.name}</span>
            <span>${p.price}</span>
          </div>
        ))}
      </div>

      {/* Invoice / Cart */}
      <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: 16, padding: 20 }}>
        <h2>فاتورة العميل</h2>
        <input
          type="text"
          placeholder="اسم العميل"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 12,
            border: "1px solid #ccc",
            marginBottom: 20,
          }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ddd", padding: 8 }}>المنتج</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 8 }}>الكمية</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 8 }}>السعر</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 8 }}>الإجمالي</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: 8 }}>حذف</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: 8 }}>{item.name}</td>
                <td style={{ padding: 8, textAlign: "center" }}>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    style={{ width: 50, textAlign: "center", borderRadius: 8 }}
                  />
                </td>
                <td style={{ padding: 8, textAlign: "right" }}>${item.price}</td>
                <td style={{ padding: 8, textAlign: "right" }}>${(item.price * item.quantity).toFixed(2)}</td>
                <td style={{ padding: 8, textAlign: "center" }}>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: "red" }}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "right" }}>
          <p>الإجمالي الفرعي: ${subtotal.toFixed(2)}</p>
          <p>الضريبة 14%: ${tax.toFixed(2)}</p>
          <h3>الإجمالي النهائي: ${total.toFixed(2)}</h3>
        </div>

        <button
          style={{
            width: "100%",
            padding: 12,
            marginTop: 20,
            borderRadius: 12,
            border: "none",
            backgroundColor: "#00796B",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => window.print()}
        >
          طباعة الفاتورة
        </button>
      </div>
    </div>
  );
}
