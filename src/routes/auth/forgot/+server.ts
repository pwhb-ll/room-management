import type { RequestHandler } from './$types'
import { JWT_SECRET, DOMAIN } from '$env/static/private'
import type { Secret } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import { query } from '$lib/server/db'
import { sendMessage } from '$lib/server/send-in-blue'

export const POST: RequestHandler = async event => {
  const body = await event.request.json()
  const sql = `SELECT id as "userId" FROM users WHERE email = $1 LIMIT 1;`
  const { rows } = await query(sql, [body.email])

  if (rows.length > 0) {
    const { userId } = rows[0]
    // Create JWT with userId expiring in 30 mins
    const secret = JWT_SECRET
    const token = jwt.sign({ subject: userId }, <Secret> secret, {
      expiresIn: '30m'
    })

    // Email URL with token to user
    const message: Message = {
      to: [{ email: body.email }],
      subject: 'Password reset',
      tags: ['account'],
      htmlContent: `
        <a href="${DOMAIN}/auth/reset/${token}">Reset my password</a>. Your browser will open and ask you to provide a
        new password with a confirmation then redirect you to your login page.
      `
    }
    sendMessage(message)
  }

  return new Response(undefined, { status: 204 })
}