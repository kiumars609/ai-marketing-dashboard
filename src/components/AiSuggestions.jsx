import React from 'react'

export default function AiSuggestions({items}){
  return (
    <div className="suggestions-card">
      <h3>AI Suggestions</h3>
      <ul>
        {items.map(s=> <li key={s.id}>{s.text}</li>)}
      </ul>
      <button className="btn primary">Run Suggestion</button>
    </div>
  )
}
