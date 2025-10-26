import React from 'react'

export default function Campaigns({list}){
  return (
    <div className="campaigns-card">
      <h3>Campaigns</h3>
      <table>
        <thead><tr><th>Name</th><th>Budget</th><th>Status</th><th>Performance</th></tr></thead>
        <tbody>
          {list.map(c=> (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.budget}</td>
              <td>{c.status}</td>
              <td>{c.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
