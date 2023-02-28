<script>
	import { plan } from '$lib/stores';

	export let data;
</script>

<h1>Dashboard</h1>

{#if $plan != 'enterprise'}
	Please upgrade to the enterprise plan!
{/if}

<pre>
  {JSON.stringify(data, null, 2)}
</pre>
