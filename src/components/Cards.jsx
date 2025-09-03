import React from 'react'

function Card({children, style}){ return <div className="card" style={style}>{children}</div> }

export default function Cards(){
  return (
    <div className="grid" style={{marginBottom:18}}>
      <Card style={{background:'linear-gradient(135deg,var(--primary),var(--accent))',color:'#fff'}}>
        <div style={{fontSize:18,fontWeight:700}}>$500.00</div>
        <div className="small" style={{color:'#fff'}}>إجمالي الأرباح</div>
      </Card>
      <Card style={{background:'linear-gradient(135deg,#2b9cf9,#3bb6ff)',color:'#fff'}}>
        <div style={{fontSize:18,fontWeight:700}}>$108</div>
        <div className="small" style={{color:'#fff'}}>إجمالي الطلبات</div>
      </Card>
      <Card>
        <div style={{fontSize:16,fontWeight:700}}>$203k</div>
        <div className="small">إجمالي الدخل</div>
      </Card>
    </div>
  )
}
