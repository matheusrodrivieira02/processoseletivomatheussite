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
    created_at: string,
    nome_completo: string,
    telefone: number,
    cargo_nivel: string,
    anos_experiencia: string,
    link_linkedin: string,
    porque_trabalhar_aqui: string,
    email: string,
    id: number,
    cargo_desejado: string,
    pretensao_salarial: string,
    habilidades: string,
    sobre_voce: string,
    status: "Aprovado" | "Revisar",
}

const statusStyles = {
  Aprovado: "bg-green-100 text-green-700",
  Revisar: "bg-yellow-100 text-yellow-700",
}

export function DataTable({ data }: { data: TableItem[] }) {
  
  return (
    <div className="rounded-md bg-white p-4">
      <div className="max-h-[375px] overflow-auto">
        <Table className="min-w-[1800px]">
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[180px]">Nome completo</TableHead>
              <TableHead className="min-w-[90px]">Status</TableHead>
              <TableHead className="min-w-[90px]">E-mail</TableHead>
              <TableHead className="min-w-[130px]">Telefone</TableHead>
              <TableHead className="min-w-[110px]">Cargo desejado</TableHead>
              <TableHead className="min-w-[80px]">Nível do cargo</TableHead>
              <TableHead className="min-w-[100px]">Anos de experiência</TableHead>
              <TableHead className="min-w-[300px]">Pretensão salarial</TableHead>
              <TableHead className="min-w-[250px]">Sobre você</TableHead>
              <TableHead className="min-w-[250px]">Habilidades</TableHead>
              <TableHead className="min-w-[250px]">Por que escolheu nossa empresa?</TableHead>
              <TableHead className="min-w-[250px]">Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nome_completo}</TableCell>
                <TableCell>
                  <span className={`rounded px-2 py-1 text-xs ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>{item.cargo_desejado}</TableCell>
                <TableCell className="whitespace-nowrap">{item.cargo_nivel}</TableCell>
                <TableCell>{item.anos_experiencia}</TableCell>
                <TableCell>{item.pretensao_salarial}</TableCell>
                <TableCell><span suppressHydrationWarning>{item.sobre_voce}</span></TableCell>
                <TableCell>{item.habilidades}</TableCell>
                <TableCell>{item.porque_trabalhar_aqui}</TableCell>
                <TableCell> {item.created_at} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
