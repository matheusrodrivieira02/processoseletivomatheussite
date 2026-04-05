"use client"

import { useEffect, useState } from "react"
import { BarChartCargo } from "./barchart-cargo"
import { BarChartNivel } from "./barchart-nivel"
import { DonutChart } from "../components/donutchart"

interface BarChartCargo {
  cargo_desejado: string
  quantidade: number
}

interface BarChartNivel {
  nivel: string
  quantidade: number
}

interface DonutSlice {
  anos_experiencia: string
  quantidade: number
  cor: string
}

function getColor(index: number) {
  const colors = ["#3b82f6", "#10b981", "#f97316", "#ec4899"]
  return colors[index % colors.length]
}

export default function Dashboards() {

  const [channels, setChannels] = useState<DonutSlice[]>([])

  useEffect(() => {
  fetch("/api/donutchart")
    .then((res) => {
      if (!res.ok) throw new Error("Falha na requisição")
      return res.json()
    })
    .then((data: DonutSlice[]) => {
      const formatted = data.map((item, index) => ({
        anos_experiencia: item.anos_experiencia,
        quantidade: item.quantidade,
        cor: getColor(index),
      }))
      setChannels(formatted)
    })
    .catch(console.error)
  }, [])

  const [labels, setLabels] = useState<string[]>([])
  const [valores, setValores] = useState<number[]>([])

  useEffect(() => {
  fetch("/api/barchartCargo")
    .then((res) => {
      if (!res.ok) throw new Error("Falha na requisição")
      return res.json()
    })
    .then((data: BarChartCargo[]) => {
      setLabels(data.map((d) => d.cargo_desejado))
      setValores(data.map((d) => d.quantidade))
    })
    .catch(console.error)
  }, [])

  const [labelsNivel, setLabelsNivel] = useState<string[]>([])
  const [valoresNivel, setValoresNivel] = useState<number[]>([])

  useEffect(() => {
  fetch("/api/barchartNivel")
    .then((res) => {
      if (!res.ok) throw new Error("Falha na requisição")
      return res.json()
    })
    .then((data: BarChartNivel[]) => {
      setLabelsNivel(data.map((d) => d.nivel))
      setValoresNivel(data.map((d) => d.quantidade))
    })
    .catch(console.error)
  }, [])

  return (
      <div className="w-full max-w-8xl grid grid-cols-3 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-md p-5 flex flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              Contagem de pessoas por cargo
            </p>
          </div>
          <BarChartCargo labels={labels} valores={valores} />
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-md p-5 flex flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              Contagem de pessoas por nível
            </p>
          </div>
          <BarChartNivel labels={labelsNivel} valores={valoresNivel} />
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-md p-5 flex flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Anos de experiência dos candidatos</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {channels.map((c) => (
              <span key={c.anos_experiencia} className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="w-2.5 h-2.5 rounded-[3px]" style={{ backgroundColor: c.cor }} />
                {c.anos_experiencia} <span className="text-gray-300 dark:text-gray-600">{c.anos_experiencia}%</span>
              </span>
            ))}
          </div>
          <DonutChart data={channels} />
        </div>
      </div>
  )
}