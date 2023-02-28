import { authenticated } from '$lib/handlers';

export const load = authenticated(() => {
	return { protectedData: 41 };
});
