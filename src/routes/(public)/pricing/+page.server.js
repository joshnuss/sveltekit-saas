import * as plans from '$lib/services/plans'

export async function load() {
	return {
		plans: plans.all()
	}
}
