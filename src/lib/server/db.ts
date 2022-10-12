/* eslint-disable @typescript-eslint/no-explicit-any */
import type { QueryResult} from 'pg'
import pg from 'pg'
import { DATABASE_URL } from '$env/static/private'

const pool = new pg.Pool({
  max: 10, // default
  connectionString: DATABASE_URL,
  ssl: false
  // ssl: {
  //   rejectUnauthorized: false
  // }
})

type PostgresQueryResult = (sql: string, params?: any[]) => Promise<QueryResult<any>>
export const query: PostgresQueryResult = (sql, params?) => pool.query(sql, params)
