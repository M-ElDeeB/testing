import { Chart as ChartJS } from 'chart.js/auto'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = ({userData}) => {
  return (
    <Bar data={userData}/>
  )
}

export default BarChart