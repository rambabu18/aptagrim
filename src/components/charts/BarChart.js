import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts'

export default function Barchart() {

    const data=[
        {name:'facebook', value: 100000},
        {name:'instagram', value: 400000},
        {name:'whatsapp', value: 700000},
        {name:'Telegram', value: 100000}
    ]
    return (
        <div>
            <h2>Bar Chart</h2>
             <BarChart width={730} height={250} data={data}>
             <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
             <Legend />
             <Bar dataKey="value" fill="#8884d8" />
             <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}
