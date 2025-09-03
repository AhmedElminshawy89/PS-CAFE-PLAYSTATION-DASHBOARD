// import React, { useState } from 'react'

// export default function Login({ onLogin }){
//   const [storeType, setStoreType] = useState('cafe')
//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')

//   function submit(e){
//     e.preventDefault()
//     // simple local auth for prototype
//     if(!name) return alert('من فضلك اكتب اسم المستخدم')
//     onLogin({ name, storeType })
//   }

//   return (
//     <div className="login-wrapper">
//       <form className="login-card" onSubmit={submit}>
//         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//           <div>
//             <h2>تسجيل الدخول</h2>
//             <div className="small">نظام كافيه & بلايستيشن</div>
//           </div>
//           <div style={{textAlign:'center'}}>
//             <div style={{width:48,height:48,borderRadius:10,background:'linear-gradient(135deg,var(--primary),var(--accent))',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>B</div>
//           </div>
//         </div>

//         <label style={{marginTop:14}}>اختر النظام</label>
//         <select value={storeType} onChange={e=>setStoreType(e.target.value)} className="input">
//           <option value="cafe">كافيه</option>
//           <option value="ps">بلايستيشن</option>
//         </select>

//         <label>اسم المستخدم</label>
//         <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="ادخل الاسم" />

//         <label>كلمة المرور</label>
//         <input type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••" />

//         <button style={{marginTop:12,background:'linear-gradient(90deg,var(--primary),var(--accent))',color:'#fff',padding:'10px 12px',borderRadius:10,border:0,cursor:'pointer',width:'100%'}}>دخول</button>
//       </form>
//     </div>
//   )
// }




import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [storeType, setStoreType] = useState("cafe");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name) return alert("من فضلك اكتب اسم المستخدم");
    onLogin({ name, storeType });
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={submit}>
        <h2>تسجيل الدخول</h2>

        {/* <div className="input-group">
          <label>اختر النظام</label>
          <select
            value={storeType}
            onChange={(e) => setStoreType(e.target.value)}
            className="input"
          >
            <option value="cafe">كافيه</option>
            <option value="ps">بلايستيشن</option>
          </select>
        </div> */}

        <div className="input-group">
          <label>اسم المستخدم</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="أدخل اسم المستخدم"
          />
        </div>

        <div className="input-group">
          <label>كلمة المرور</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="أدخل كلمة المرور"
          />
        </div>

        <button className="btn">تسجيل الدخول</button>

        {/* <div className="extra-links">
          <a href="#">نسيت كلمة المرور؟</a> |{" "}
          <a href="#">إنشاء حساب جديد</a>
        </div> */}
      </form>

      {/* CSS داخل نفس الملف (ممكن تنقله لملف خارجي) */}
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #2c3e50, #3498db);
        }

        .login-box {
          background: #fff;
          padding: 30px 25px;
          border-radius: 20px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: fadeIn 1s ease-in-out;
        }

        .login-box h2 {
          margin-bottom: 20px;
          color: #2c3e50;
          font-size: 24px;
        }

        .input-group {
          margin-bottom: 15px;
          text-align: right;
        }

        .input-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: bold;
          color: #555;
        }

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ccc;
          transition: all 0.3s ease;
        }

        .input:focus {
          border-color: #3498db;
          outline: none;
          box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
        }

        .btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 10px;
        }

        {/* .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        } */}

        .extra-links {
          margin-top: 15px;
          font-size: 14px;
        }

        .extra-links a {
          color: #3498db;
          text-decoration: none;
          margin: 0 5px;
          transition: 0.3s;
        }

        .extra-links a:hover {
          color: #2ecc71;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
