import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("URL:", process.env.BARCHART_CARGO_API_URL)

    const response = await fetch(process.env.BARCHART_CARGO_API_URL!, {
      cache: "no-store",
    })

    console.log("Status:", response.status)

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