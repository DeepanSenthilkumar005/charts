import React from 'react'
import Chart from './components/chart'

function App() {
  const data = [
    { name: 'January', sales: 4000, revenue: 2400, customers: 240 },
    { name: 'February', sales: 3000, revenue: 1398, customers: 221 },
    { name: 'March', sales: 2000, revenue: 9800, customers: 290 },
    { name: 'April', sales: 2780, revenue: 3908, customers: 200 },
    { name: 'May', sales: 1890, revenue: 4800, customers: 180 },
    { name: 'June', sales: 2390, revenue: 3800, customers: 215 },
    { name: 'July', sales: 3490, revenue: 4300, customers: 230 },
    { name: 'August', sales: 3400, revenue: 4900, customers: 250 },
    { name: 'September', sales: 2700, revenue: 4700, customers: 200 },
    { name: 'October', sales: 3100, revenue: 4200, customers: 240 },
    { name: 'November', sales: 3200, revenue: 4100, customers: 250 },
    { name: 'December', sales: 4100, revenue: 4500, customers: 270 },
  ];
  
  return (
    <>
    <div className='flex justify-center bg-slate-200 text-slate-500 font-serif'> 
      Chart
    </div>
    <Chart data={data} />
    </>
  )
}

export default App