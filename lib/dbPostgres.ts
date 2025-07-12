// lib/dbPostgres.ts
import { Pool } from 'pg'

const connectionString = process.env.SUPABASE_POSTGRES_URL as string
console.log(connectionString);

if (!connectionString) {
  throw new Error('❌ Missing SUPABASE_POSTGRES_URL in environment variables')
}

export const dbPostgres = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Supabase requires SSL
  },
})
