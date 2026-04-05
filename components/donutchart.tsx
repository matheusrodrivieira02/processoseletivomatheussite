"use client"

import { useEffect, useRef } from "react"

interface DonutSlice {
  anos_experiencia: string
  quantidade: number
  cor: string
}

interface DonutChartProps {
  data: DonutSlice[]
}

export function DonutChart({ data }: DonutChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartRef = useRef<any>(null)

  useEffect(() => {
    async function init() {
      const { default: Chart } = await import("chart.js/auto")
      if (!canvasRef.current) return
      chartRef.current?.destroy()

      const centerLabel = {
        id: "centerLabel",
        beforeDraw(chart: any) {
          const { width, height, ctx } = chart
          ctx.save()
          ctx.font = "600 20px system-ui"
          ctx.fillStyle = "#111827"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText("100%", width / 2, height / 2 - 8)
          ctx.font = "400 11px system-ui"
          ctx.fillStyle = "#9ca3af"
          ctx.fillText("total", width / 2, height / 2 + 12)
          ctx.restore()
        },
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "doughnut",
        plugins: [centerLabel],
        data: {
          labels: data.map((d) => d.anos_experiencia),
          datasets: [
            {
              data: data.map((d) => d.quantidade),
              backgroundColor: data.map((d) => d.cor),
              borderWidth: 2,
              borderColor: "#fff",
              hoverBorderColor: "#fff",
              spacing: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "70%",
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.raw}%` } },
          },
        },
      })
    }

    init()
    return () => chartRef.current?.destroy()
  }, [data])

  return (
    <div className="relative w-full h-52">
      <canvas ref={canvasRef} />
    </div>
  )
}