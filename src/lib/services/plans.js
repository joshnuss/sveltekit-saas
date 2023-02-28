import { db } from '$lib/db'

export function all() {
	return db.plan.findMany({
		orderBy: [{ price: 'asc' }]
	})
}

export function get(id) {
	return getBy({ id })
}

export function getBy(where) {
	return db.plan.findUnique({ where })
}
