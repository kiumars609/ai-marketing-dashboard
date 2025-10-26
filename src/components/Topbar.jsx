import React from 'react'

export default function Topbar(){
  return (
    <header className="topbar">
      <div className="search">
        <input placeholder="Search campaigns, audiences..." />
      </div>
      <div className="actions">
        <button className="btn">New Campaign</button>
        <div className="avatar">K</div>
      </div>
    </header>
  )
}
