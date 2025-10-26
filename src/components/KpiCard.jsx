import React from 'react'

export default function KpiCard({kpi}){
  return (
    <div className="kpi-card">
      <div className="kpi-label">{kpi.label}</div>
      <div className="kpi-value">{kpi.value}</div>
      <div className={'kpi-change '+(kpi.change.startsWith('+')? 'up':'down')}>{kpi.change}</div>
    </div>
  )
}
