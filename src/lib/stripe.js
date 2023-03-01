import Stripe from 'stripe'
import { env } from '$env/dynamic/private'

export const stripe = Stripe(env.SECRET_STRIPE_KEY, {
	apiVersion: '2022-11-15'
})
