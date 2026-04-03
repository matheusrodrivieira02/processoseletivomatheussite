"use client"

import { Bar, BarChart, XAxis, YAxis, Pie, PieChart, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  valor: { label: "Valor", color: "hsl(220 70% 50%)" },
}

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"]

export function BarChartCard({ data, title }: { data: { name: string; valor: number }[]; title: string }) {
  return (
    <div className="rounded-xl bg-white p-6">
      <p className="mb-4 text-center text-sm text-neutral-500">{title}</p>
      <ChartContainer config={chartConfig} className="h-[180px] w-full">
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="valor" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export function PieChartCard({ data, title }: { data: { name: string; valor: number }[]; title: string }) {
  return (
    <div className="rounded-xl bg-white p-6">
      <p className="mb-4 text-center text-sm text-neutral-500">{title}</p>
      <ChartContainer config={chartConfig} className="h-[180px] w-full">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie data={data} dataKey="valor" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  )
}
