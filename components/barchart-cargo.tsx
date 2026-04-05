"use client"

import { useEffect, useRef } from "react"

interface BarChartProps {
  labels: string[]
  valores: number[]
}

export function BarChartCargo({ labels, valores }: BarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    async function init() {
      const { default: Chart } = await import("chart.js/auto")
      if (!canvasRef.current) return
      chartRef.current?.destroy()

      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Quantidade",
              data: valores,
              backgroundColor: "#3b82f6",
              borderRadius: 5,
              barPercentage: 0.6,
              categoryPercentage: 0.75,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => ` ${ctx.raw} respostas`,
              },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              border: { display: false },
              ticks: { font: { size: 11 }, color: "#9ca3af" },
            },
            y: {
              grid: { color: "rgba(156,163,175,0.15)" },
              border: { display: false },
              beginAtZero: true,
              ticks: {
                font: { size: 11 },
                color: "#9ca3af",
                stepSize: 1,
              },
            },
          },
        },
      })
    }

    init()
    return () => chartRef.current?.destroy()
  }, [labels, valores])

  return (
    <div className="relative w-full h-56">
      <canvas ref={canvasRef} />
    </div>
  )
}