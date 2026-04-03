import { BarChartCard, PieChartCard } from "../components/dashboard-charts"
import { DataTable } from "../components/data-table"

// ====== DADOS FALSOS - SUBSTITUA PELA SUA API ======
const data = {
  stats: {
    totalDados: 22,
    revisar: 10,
    aprovados: 12,
  },
  chartData1: [
    { name: "Jan", valor: 400 },
    { name: "Fev", valor: 300 },
    { name: "Mar", valor: 520 },
    { name: "Abr", valor: 280 },
    { name: "Mai", valor: 450 },
    { name: "Jun", valor: 380 },
  ],
  chartData2: [
    { name: "Aprovados", valor: 12 },
    { name: "Revisar", valor: 10 },
    { name: "Pendentes", valor: 5 },
    { name: "Rejeitados", valor: 3 },
  ],
  tableData: [
    { id: "1", nome: "Relatório Financeiro Q1", status: "aprovado" as const, data: "15/01/2024", responsavel: "Maria Silva", departamento: "Financeiro", prioridade: "Alta", valor: "R$ 15.000", justificativa: "Necessário para fechamento contábil do trimestre e apresentação ao conselho administrativo", observacoes: "Aguardando assinatura do diretor financeiro", prazo: "30/01/2024", categoria: "Contabilidade" },
    { id: "2", nome: "Análise de Mercado", status: "revisar" as const, data: "18/01/2024", responsavel: "João Santos", departamento: "Marketing", prioridade: "Média", valor: "R$ 8.500", justificativa: "Estudo de concorrência para lançamento do novo produto no segundo semestre", observacoes: "Faltam dados da região Sul", prazo: "15/02/2024", categoria: "Pesquisa" },
    { id: "3", nome: "Proposta Comercial", status: "pendente" as const, data: "20/01/2024", responsavel: "Ana Costa", departamento: "Vendas", prioridade: "Alta", valor: "R$ 22.000", justificativa: "Cliente estratégico com potencial de expansão para outras unidades", observacoes: "Reunião agendada para próxima semana", prazo: "25/01/2024", categoria: "Vendas" },
    { id: "4", nome: "Relatório de Vendas", status: "aprovado" as const, data: "22/01/2024", responsavel: "Pedro Lima", departamento: "Vendas", prioridade: "Baixa", valor: "R$ 5.200", justificativa: "Acompanhamento mensal de performance da equipe comercial", observacoes: "Incluir metas do próximo mês", prazo: "28/01/2024", categoria: "Relatório" },
    { id: "5", nome: "Plano Estratégico 2024", status: "revisar" as const, data: "25/01/2024", responsavel: "Carla Mendes", departamento: "Diretoria", prioridade: "Alta", valor: "R$ 45.000", justificativa: "Definição de metas e investimentos prioritários para o ano fiscal", observacoes: "Pendente aprovação do CEO", prazo: "10/02/2024", categoria: "Planejamento" },
    { id: "6", nome: "Orçamento Anual", status: "aprovado" as const, data: "28/01/2024", responsavel: "Lucas Oliveira", departamento: "Financeiro", prioridade: "Alta", valor: "R$ 120.000", justificativa: "Previsão orçamentária completa com projeções de receita e despesas", observacoes: "Versão final após revisão", prazo: "05/02/2024", categoria: "Financeiro" },
  ],
}
// ===================================================

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-300 p-6">
      <div className="mx-auto max-w-7xl space-y-4">
        <h1 className="text-center text-xl font-medium italic text-neutral-800">
          Analise dos dados
        </h1>

        <div className="flex gap-2">
          <div className="rounded-md bg-white px-4 py-2 text-sm">
            {data.stats.totalDados} dados
          </div>
          <div className="rounded-md bg-white px-4 py-2 text-sm">
            {data.stats.revisar} revisar
          </div>
          <div className="rounded-md bg-white px-4 py-2 text-sm">
            {data.stats.aprovados} aprovados
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <BarChartCard data={data.chartData1} title="GRAFICO" />
          <PieChartCard data={data.chartData2} title="GRAFICO 2" />
        </div>

        <DataTable data={data.tableData} />
      </div>
    </main>
  )
}
