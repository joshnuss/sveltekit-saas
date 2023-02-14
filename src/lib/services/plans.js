import { db } from '$lib/db'

export function all() {
  return db.plan.findMany({
		orderBy: [
			{ price: 'asc' }
		]
	})	
}

export function get(id) {
	return db.plan.findUnique({
		where: { id }
	})
}
