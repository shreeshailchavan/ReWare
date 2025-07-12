// app/api/user/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { registerUser } from '@/services/user/registerUser'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const user = await registerUser(body)
    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 })
  }
}
