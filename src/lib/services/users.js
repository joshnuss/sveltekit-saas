import { db } from '$lib/db'

export function getBy(where) {
	return db.user.findUnique({ where })
}

export function update(id, data) {
	return db.user.update({
		data,
		where: { id }
	})
}
