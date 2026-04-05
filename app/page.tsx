"use client"

import { useEffect, useState } from "react"
import { DataTable } from "../components/data-table"
import Dashboards from "../components/dashboards"

export default function Page() {
  const [tableData, setTableData] = useState<any[]>([])

  const [total, setTotal] = useState<number | null>(null)
  const [total_aprovados, setTotalAprovados] = useState<number | null>(null)
  const [total_revisar, setTotalRevisar] = useState<number | null>(null)

  useEffect(() => {
  fetch("/api/countTotal")
    .then((res) => res.json())
    .then((data) => {
      setTotal(data.total)
    })
    .catch(console.error)
  }, [])

  useEffect(() => {
  fetch("/api/countTotalAprovados")
    .then((res) => res.json())
    .then((data) => {
      setTotalAprovados(data.total_aprovados)
    })
    .catch(console.error)
  }, [])

  useEffect(() => {
  fetch("/api/countTotalRevisar")
    .then((res) => res.json())
    .then((data) => {
      setTotalRevisar(data.total_revisar)
    })
    .catch(console.error)
  }, [])

  useEffect(() => {
  fetch("/api/table")
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA:", data)
      setTableData(data)
    })
    .catch((err) => console.error("ERRO:", err))
  }, [])

  return (
    <main className="min-h-screen bg-neutral-200 p-6">
      <div className="mx-auto max-w-7xl space-y-4">
        <h1 className="text-center text-2xl font-medium text-neutral-800 pb-8">
          DASHBOARD DE CANDIDATURAS
        </h1>

        <div className="flex gap-2">
          <div className="rounded-md bg-white px-8 py-6 text-sm">
            {total ?? "Carregando..."} CANDIDATURAS
          </div>
          <div className="rounded-md bg-white px-8 py-6 text-sm">
            {total_aprovados ?? "Carregando..."} APROVADOS
          </div>
          <div className="rounded-md bg-white px-8 py-6 text-sm">
            {total_revisar ?? "Carregando..."} A REVISAR
          </div>
        </div>

        <Dashboards/>

        <DataTable data={tableData} />
      </div>
    </main>
  )
}