import * as plans from '$lib/services/plans'

export async function load() {
	const records = plans.all()

	return { plans: records }
}
