"use client"
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler } from 'chart.js';
import Link from 'next/link';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler);

const SalesAnalytics = () => {
  const [timeFrame, setTimeFrame] = useState('Weekly');

  // Sample data for Weekly and Monthly
  const weeklyData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Simulate 30 days
    datasets: [
      {
        label: 'Sales',
        data: [120, 130, 110, 150, 140, 170, 160, 130, 110, 140, 130, 160, 150, 120, 100, 130, 110, 140, 130, 160, 150, 120, 100, 130, 110, 140, 130, 160, 150, 120], // Sample data
        borderColor: '#049601', // Green line
        backgroundColor: 'rgba(76, 175, 80, 0.1)', // Light green fill
        fill: true,
        tension: 0, // Smooth line
        pointRadius: 0, // Hide points
      },
    ],
  };

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [800, 1200, 600, 1000],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const data = timeFrame === 'Weekly' ? weeklyData : monthlyData;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis labels
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        display: false, // Hide y-axis labels
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
  };


  return (
    <Link href="/sales-analytics">
      <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 container lg:mt-12 mt-6 lg:mb-12 mb-6 w-full" >
        {/* Header */}

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Sales Analytics</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setTimeFrame('Weekly')}
              className={`px-3 py-1 rounded-full text-xs font-medium ${timeFrame === 'Weekly' ? 'bg-Main text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFrame('Monthly')}
              className={`px-3 py-1 rounded-full text-xs font-medium ${timeFrame === 'Monthly' ? 'bg-Main text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="h-44 w-full">
          <div className=" h-full">
            <Line data={data} options={options} />
          </div>
        </div>

      </div>
    </Link>
  );
};

export default SalesAnalytics;