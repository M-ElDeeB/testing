import { Chart as ChartJS } from 'chart.js/auto'
import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({userData}) => {
  return (
    <Line data={userData}/>
  )
}

export default LineChart