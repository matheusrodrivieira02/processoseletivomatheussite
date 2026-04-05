import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("URL:", process.env.DONUT_CHART_API_URL)

    const response = await fetch(process.env.DONUT_CHART_API_URL!, {
      cache: "no-store",
    })

    console.log("Status:", response.status)

    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar dados" },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Erro detalhado:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}