import { Pie, PieChart } from 'recharts'
import React from 'react'

export default function Piechart() {

    const data=[
        {name:'facebook', value: 100000},
        {name:'instagram', value: 400000},
        {name:'whatsapp', value: 700000},
        {name:'Telegram', value: 100000}
    ]
    return (
        <div>
            <h2>Pie Chart</h2>
            <PieChart width={730} height={250}>
             <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
             <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
           
        </div>
    )
}
