import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from '@auth/core/providers/github'
import { env } from '$env/dynamic/private'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '$lib/db'

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(db),
	providers: [
		GitHub({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		})
	],
	session: {
		// temporary workaround
		generateSessionToken() {
			return crypto.randomUUID()
		}
	}
})
