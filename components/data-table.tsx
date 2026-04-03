"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type TableItem = {
  id: string
  nome: string
  status: "aprovado" | "revisar" | "pendente"
  data: string
  responsavel: string
  departamento: string
  prioridade: string
  valor: string
  justificativa: string
  observacoes: string
  prazo: string
  categoria: string
}

const statusStyles = {
  aprovado: "bg-green-100 text-green-700",
  revisar: "bg-yellow-100 text-yellow-700",
  pendente: "bg-neutral-100 text-neutral-600",
}

export function DataTable({ data }: { data: TableItem[] }) {
  return (
    <div className="rounded-xl bg-white p-6">
      <p className="mb-4 text-center text-lg font-medium">TABELA</p>
      <div className="overflow-x-auto">
        <Table className="min-w-[1800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[180px]">Nome</TableHead>
              <TableHead className="min-w-[90px]">Status</TableHead>
              <TableHead className="min-w-[90px]">Data</TableHead>
              <TableHead className="min-w-[130px]">Responsavel</TableHead>
              <TableHead className="min-w-[110px]">Departamento</TableHead>
              <TableHead className="min-w-[80px]">Prioridade</TableHead>
              <TableHead className="min-w-[100px]">Valor</TableHead>
              <TableHead className="min-w-[300px]">Justificativa</TableHead>
              <TableHead className="min-w-[250px]">Observacoes</TableHead>
              <TableHead className="min-w-[100px]">Prazo</TableHead>
              <TableHead className="min-w-[120px]">Categoria</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>
                  <span className={`rounded px-2 py-1 text-xs ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </TableCell>
                <TableCell><span suppressHydrationWarning>{item.data}</span></TableCell>
                <TableCell>{item.responsavel}</TableCell>
                <TableCell>{item.departamento}</TableCell>
                <TableCell>{item.prioridade}</TableCell>
                <TableCell className="whitespace-nowrap">{item.valor}</TableCell>
                <TableCell>{item.justificativa}</TableCell>
                <TableCell>{item.observacoes}</TableCell>
                <TableCell><span suppressHydrationWarning>{item.prazo}</span></TableCell>
                <TableCell>{item.categoria}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
