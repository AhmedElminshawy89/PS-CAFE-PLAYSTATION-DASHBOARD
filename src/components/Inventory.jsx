import React from "react";

const invoiceData = {
  invoiceNumber: "INV-2025-001",
  date: "2025-09-03",
  customerName: "أحمد المنشاوي",
  products: [
    { id: 1, name: "كنبة مريحة", quantity: 2, price: 250 },
    { id: 2, name: "جهاز ألعاب", quantity: 1, price: 500 },
    { id: 3, name: "ترابيزة خشب", quantity: 3, price: 120 },
  ],
  taxPercent: 14,
  discount: 50,
};

function calculateTotal(products) {
  return products.reduce((sum, p) => sum + p.price * p.quantity, 0);
}

export default function Invoice() {
  const subtotal = calculateTotal(invoiceData.products);
  const tax = (subtotal * invoiceData.taxPercent) / 100;
  const total = subtotal + tax - invoiceData.discount;

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "20px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 16,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <h1 style={{ margin: 0 }}>متجرك</h1>
          <p style={{ margin: 0 }}>فاتورة ضريبية</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ margin: 0 }}>رقم الفاتورة: {invoiceData.invoiceNumber}</p>
          <p style={{ margin: 0 }}>التاريخ: {invoiceData.date}</p>
        </div>
      </div>

      <hr style={{ margin: "10px 0" }} />

      {/* Customer */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ margin: 0, fontWeight: "600" }}>العميل: {invoiceData.customerName}</p>
      </div>

      {/* Products Table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 20 }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>المنتج</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>الكمية</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>السعر</th>
            <th style={{ border: "1px solid #ddd", padding: 8 }}>المجموع</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.products.map((p) => (
            <tr key={p.id}>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{p.name}</td>
              <td style={{ border: "1px solid #ddd", padding: 8, textAlign: "center" }}>{p.quantity}</td>
              <td style={{ border: "1px solid #ddd", padding: 8, textAlign: "right" }}>${p.price}</td>
              <td style={{ border: "1px solid #ddd", padding: 8, textAlign: "right" }}>
                ${(p.price * p.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <p>الإجمالي الفرعي: ${subtotal.toFixed(2)}</p>
        <p>الضريبة ({invoiceData.taxPercent}%): ${tax.toFixed(2)}</p>
        <p>الخصم: ${invoiceData.discount.toFixed(2)}</p>
        <h2 style={{ margin: "10px 0" }}>الإجمالي النهائي: ${total.toFixed(2)}</h2>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <button
          style={{
            padding: "10px 20px",
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
