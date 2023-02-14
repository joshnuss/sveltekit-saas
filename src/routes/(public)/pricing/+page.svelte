<script>
  export let data

  function choose(plan) {
    // TODO
  }
</script>

<h1>Pricing</h1>

<section>
  {#each data.plans as plan}
    <article>
      <h2>{plan.name}</h2>

      <p>{(plan.price/100).toLocaleString('en', { style: 'currency', currency: 'usd'})}</p>

      <button on:click|preventDefault={() => choose(plan)}>Choose</button>
    </article>
  {/each}
</section>
