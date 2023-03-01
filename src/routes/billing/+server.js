import { redirect } from '@sveltejs/kit'
import { member } from '$lib/handlers'
import * as billing from '$lib/services/billing'

export const GET = member(async ({ locals }) => {
	const session = await locals.getSession()

	const billingSession = await billing.createPortalSession(session.user)

	throw redirect(303, billingSession.url)
})
