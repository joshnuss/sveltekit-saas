import { db } from '$lib/db'

export function all() {
  return db.plan.findMany({
		orderBy: [
			{ price: 'asc' }
		]
	})	
}
