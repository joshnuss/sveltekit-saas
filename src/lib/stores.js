import { page } from '$app/stores'
import { derived } from 'svelte/store'

export const user = derived(page, ($page) => {
	return $page.data.session?.user
})

export const plan = derived(page, ($page) => {
	return $page.data.session?.plan
})
