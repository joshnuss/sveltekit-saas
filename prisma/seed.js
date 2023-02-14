import { db } from '$lib/db'

await db.plan.create({
	data: {
		name: 'Basic',
		handle: 'basic',
		price: 1000,
		priceId: 'price_1MZMOOCMfrcMFSmphbMLS3HN'
	}
})

await db.plan.create({
	data: {
		name: 'Enterprise',
		handle: 'enterprise',
		price: 10000,
		priceId: 'price_1MZMP5CMfrcMFSmpKAyvNHbV'
	}
})
