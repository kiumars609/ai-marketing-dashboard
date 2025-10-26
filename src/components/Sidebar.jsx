import React from 'react'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">AI Marketing</div>
      <nav className="nav">
        <button className="active">Dashboard</button>
        <button>Campaigns</button>
        <button>AI Studio</button>
        <button>Settings</button>
      </nav>
      <div className="footer">© 2025 Kiumars</div>
    </aside>
  )
}
