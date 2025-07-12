// services/user/registerUser.ts
import { dbPostgres } from '@/lib/dbPostgres'
import bcrypt from 'bcryptjs'

export async function registerUser({ firstname, lastname, email, password }: {
  firstname: string,
  lastname: string,
  email: string,
  password: string
}) {
  const hashedPassword = await bcrypt.hash(password, 10)

  const result = await dbPostgres.query(
    `INSERT INTO "user" (firstname, lastname, email, password)
     VALUES ($1, $2, $3, $4) RETURNING id`,
    [firstname, lastname, email, hashedPassword]
  )

  return { message: 'User registered', id: result.rows[0].id }
}