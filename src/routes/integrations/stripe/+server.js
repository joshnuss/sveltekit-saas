import { stripe } from '$lib/stripe'
import { error, json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
import * as billing from '$lib/services/billing'

// endpoint to handle incoming webhooks
export async function POST({ request }) {
	const body = await request.text()
	const signature = request.headers.get('stripe-signature')

	let event

	try {
		event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET)
	} catch (err) {
		console.warn('⚠️  Webhook signature verification failed.', err.message)

		throw error(400, 'Invalid request')
	}

	const { object } = event.data

	switch (event.type) {
		case 'customer.subscription.created':
		case 'customer.subscription.updated':
		case 'customer.subscription.deleted':
		case 'customer.subscription.trial_will_end':
			await billing.syncSubscription(object.id)
			console.log(`Synced subscription ${object.id}`)
			break
	}

	return json()
}
