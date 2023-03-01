import { stripe } from '$lib/stripe'
import { env } from '$env/dynamic/private'
import * as users from '$lib/services/users'
import * as plans from '$lib/services/plans'

export async function createCheckout({ email }, plan) {
	const user = await users.getBy({ email })
	const metadata = {
		userId: user.id
	}

	return stripe.checkout.sessions.create({
		success_url: absoluteURL('/welcome?checkout_session_id={CHECKOUT_SESSION_ID}'),
		cancel_url: absoluteURL('/pricing'),
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

	return syncSubscription(checkout.subscription)
}

export async function syncSubscription(subscriptionId) {
	const subscription = await stripe.subscriptions.retrieve(subscriptionId)
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

export async function createPortalSession({ email }) {
	const user = await users.getBy({ email })

	return stripe.billingPortal.sessions.create({
		customer: user.customerId,
		return_url: absoluteURL('/dashboard')
	})
}

function absoluteURL(path) {
	return new URL(path, env.DOMAIN).toString()
}
