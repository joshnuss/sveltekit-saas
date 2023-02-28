import Stripe from 'stripe'
import { env } from '$env/dynamic/private'
import * as users from '$lib/services/users'
import * as plans from '$lib/services/plans'

const stripe = Stripe(env.SECRET_STRIPE_KEY, {
	apiVersion: '2022-11-15'
})

export async function createCheckout({ email }, plan) {
	const user = await users.getBy({ email })
	const metadata = {
		userId: user.id
	}

	return stripe.checkout.sessions.create({
		success_url: new URL(
			'/welcome?checkout_session_id={CHECKOUT_SESSION_ID}',
			env.DOMAIN
		).toString(),
		cancel_url: new URL('/pricing', env.DOMAIN).toString(),
		currency: 'usd',
		mode: 'subscription',
		customer_email: email,
		client_reference_id: user.id,
		metadata,
		subscription_data: {
			metadata
		},
		line_items: [
			{
				price: plan.priceId,
				quantity: 1
			}
		]
	})
}

export async function syncCheckout(sessionId) {
	const checkout = await stripe.checkout.sessions.retrieve(sessionId)
	const subscription = await stripe.subscriptions.retrieve(checkout.subscription)
	const { userId } = subscription.metadata

	const item = subscription.items.data[0]
	const priceId = item.price.id
	const plan = await plans.getBy({ priceId })

	await users.update(userId, {
		customerId: subscription.customer,
		subscriptionId: subscription.id,
		status: subscription.status.toUpperCase(),
		planId: plan.id
	})
}
