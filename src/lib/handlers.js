import { redirect } from '@sveltejs/kit'

export function authenticated(handler) {
	return async (event) => {
		const session = await event.locals.getSession()

		if (!session) {
			throw redirect(303, "/auth/signin")
		}

		return handler(event)
	}
}

export function member(handler) {
	return async (event) => {
		const session = await event.locals.getSession()

		if (session.plan?.handle != 'enterprise') {
			throw redirect(403, "Enterprise plan is required")
		}

		return handler(event)
	}
}
