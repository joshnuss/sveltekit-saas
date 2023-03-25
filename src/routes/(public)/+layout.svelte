<script>
	import '../../app.css'
	import { signIn } from '@auth/sveltekit/client'
</script>

<header>
	<img src="/logo.svg" alt="logo" />

	<nav>
		<a href="/">Home</a>
		<a href="/pricing">Pricing</a>
		<button on:click|preventDefault={() => signIn('github', { callbackUrl: '/dashboard' })}>
			Sign in
		</button>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background: #ccc;
	}
	header img {
		height: 60px;
	}

	header nav {
		margin: 1rem;
		display: flex;
		gap: 1rem;
	}

	header button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		display: block;
	}

	header :is(a, button) {
		text-decoration: none;
		color: #333;
		font-size: 1rem;
		align-self: center;
	}

	main {
		padding: 2rem;
	}
</style>
