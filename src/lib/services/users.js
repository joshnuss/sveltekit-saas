import { db } from '$lib/db'

export function getBy(where) {
	return db.user.findUnique({ where })
}
