import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({locals}) => {
	const { user } = locals
	const authorized = ['admin', 'user']
	if (!user || !authorized.includes(user.role)) {
		throw redirect(302, '/login?referrer=/users')
	}

  return {
    message: 'Users or Admin-only content from server.'
  }
}
