import { error, redirect } from '@sveltejs/kit';

export function authenticated(handler) {
	return async (event) => {
		const session = await event.locals.getSession();

		if (!session) {
			throw redirect(303, '/auth/signin');
		}

		return handler(event);
	};
}

export function member(handler) {
	return async (event) => {
		const session = await event.locals.getSession();

		if (!session.plan) {
			throw error(403, 'Plan is required');
		}

		return handler(event);
	};
}
