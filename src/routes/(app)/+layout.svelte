<script>
  import '../../app.css'
</script>

<header>
  <img src="/logo.svg" alt="logo">

  <nav>
    <a href="/dashboard">Home</a>
    <a href="/billing">Billing</a>
    <button>Sign out</button>
  </nav>
</header>

<main>
  <slot/>
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
