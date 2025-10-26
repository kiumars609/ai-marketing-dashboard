import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

export default function TrafficChart({data}){
  return (
    <div className="chart-card">
      <h3>Visitors & Conversions</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="visitors" stroke="#6EE7B7" strokeWidth={2} />
          <Line type="monotone" dataKey="conversions" stroke="#60A5FA" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
