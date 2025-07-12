// app/api/chat/messages/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getMessages, sendMessage } from '@/services/chat/chatService'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const sender = searchParams.get('sender')!
  const receiver = searchParams.get('receiver')!

  const messages = await getMessages(sender, receiver)
  return NextResponse.json(messages)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const message = await sendMessage(body)
  return NextResponse.json(message)
}
