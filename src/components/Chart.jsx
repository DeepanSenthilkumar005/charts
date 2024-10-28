import React from 'react';
import { Bar, BarChart, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const colors = [
  "#00FFCC", // Teal
  "#FF5722", // Deep Orange
  "#C6FF00", // Lime Green
  "#00BFFF", // Sky Blue
  "#FFC107", // Amber
  "#8BC34A", // Light Green
  "#FF4081", // Pink
  "#3F51B5", // Indigo
  "#CDDC39", // Chartreuse
  "#9C27B0", // Purple
  "#FFEB3B", // Yellow
  "#FF9800"  // Orange
];

function Chart({ data }) {
  return (
    
    <div className="grid p-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-4 ">
      <div className="border-2 p-1 sm:m-1">
        <div className='flex justify-center mb-1 bg-slate-200 text-slate-500 font-serif'> 
          BarChart
        </div>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: '#E0E0E0' }} axisLine={{ stroke: '#E0E0E0' }} />
        <YAxis tick={{ fill: '#E0E0E0' }} axisLine={{ stroke: '#E0E0E0' }} />
          <Tooltip/>
          <Legend />
          <Bar dataKey="sales" fill="#00ffcc" />
          <Bar dataKey="revenue" fill="#00BFFF" />
          {/* <Bar dataKey="customers" fill="#FF4081" /> */}
        </BarChart>
      </ResponsiveContainer>
      </div>
      
      <div className="border-2 p-1 sm:m-1">
      <div className='flex justify-center mb-1 bg-slate-200 text-slate-500 font-serif'> 
          Line Grpah
        </div>
         <ResponsiveContainer width='100%' height={300}>
          <LineChart data={data}>
            <Line type='monotone' dataKey='sales' stroke="#8884d8"/>
            <Line type='monotone' dataKey='revenue' stroke='#00FFCC'/>
            <Line type='monotone' dataKey='customers' stroke='#FF4081'/>
            <XAxis dataKey="name" tick={{ fill: '#E0E0E0' }} axisLine={{ stroke: '#E0E0E0' }} />
            <YAxis tick={{ fill: '#E0E0E0' }} axisLine={{ stroke: '#E0E0E0' }} />
            <Tooltip/>
            <Legend/>
          </LineChart>
        </ResponsiveContainer>
      </div>
       
      <div className="border-2 p-1 sm:m-1">
        <div className='flex justify-center mb-1 bg-slate-200 text-slate-500 font-serif'> 
            Pie Chart
          </div>
          <ResponsiveContainer width="100%" height={300} >
        <PieChart>
          <Pie data={data} dataKey="sales" nameKey="name" fill="#00bfff" innerRadius={50} outerRadius={110} paddingAngle={0}>
            {data.map((item, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
        </div>
      
        <div className="border-2 p-1 sm:m-1">
          <div className='flex justify-center mb-1 bg-slate-200 text-slate-500 font-serif'> 
              Pie Chart
            </div>
            <ResponsiveContainer width="100%" height={300} >
        <PieChart>
          <Pie startAngle={180} endAngle={0} data={data} dataKey="sales" nameKey="name" fill="#00bfff" innerRadius={50} outerRadius={110} paddingAngle={0.5}>
            {data.map((item, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
        </div>
      
    </div>
  );
}

export default Chart;
