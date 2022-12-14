import { Chart as ChartJS } from 'chart.js/auto'
import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = ({userData}) => {
  return (
    <Pie data={userData}/>
  )
}

export default PieChart