// services/auth/authService.ts
import { dbPostgres } from "@/lib/dbPostgres"

export const getUserByEmail = async (email: string) => {
  if(dbPostgres){
    console.log("connection established");
    
  }
  const query = 'SELECT * FROM users WHERE email = $1'
  const values = [email]

  const result = await dbPostgres.query(query, values)
  return result.rows[0]
}
