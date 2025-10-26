import React, {useEffect, useState} from 'react'
import KpiCard from '../components/KpiCard'
import TrafficChart from '../components/TrafficChart'
import Campaigns from '../components/Campaigns'
import AiSuggestions from '../components/AiSuggestions'
import metrics from '../data/mockMetrics.json'
import { motion } from 'framer-motion'

export default function Dashboard(){
  const [kpis,setKpis] = useState(metrics.kpis)
  const [traffic,setTraffic] = useState(metrics.traffic)
  const [campaigns,setCampaigns] = useState(metrics.campaigns)
  const [suggestions,setSuggestions] = useState(metrics.suggestions)

  useEffect(()=>{
    const t = setTimeout(()=> setKpis(prev => prev.map(k => k.id==='revenue' ? {...k, value:'$27.3k', change:'+10%'} : k)), 1200)
    return ()=> clearTimeout(t)
  },[])

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="dashboard container">
      <div className="kpi-row">
        {kpis.map(k=> <KpiCard key={k.id} kpi={k} />)}
      </div>
      <div className="grid-two">
        <TrafficChart data={traffic} />
        <div className="right-col">
          <Campaigns list={campaigns} />
          <AiSuggestions items={suggestions} />
        </div>
      </div>
    </motion.section>
  )
}
