import { authenticated } from '$lib/handlers';
import { error, redirect } from '@sveltejs/kit';
import * as plans from '$lib/services/plans';
import * as billing from '$lib/services/billing';

export const GET = authenticated(async ({ url, locals }) => {
	const session = await locals.getSession();

	if (session.plan) {
		throw error(400, 'User already has a plan');
	}

	const handle = url.searchParams.get('plan');
	const plan = await plans.getBy({ handle });

	const checkout = await billing.createCheckout(session.user, plan);

	throw redirect(303, checkout.url);
});
