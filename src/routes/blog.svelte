<script>
  import NavBar from '$lib/NavBar.svelte';
  import SideBar from '$lib/SideBar/index.svelte';
  import LFE from '$lib/LFE.svelte';
</script>

<div class="container">
  <div class="left-container">
    <SideBar />
  </div>
  <div class="middle-container">
    <div class="navbar-container">
      <NavBar pageType="blog" />
    </div>
    <div class="content-container">
      <LFE />
    </div>
  </div>
  <div class="right-container">
    <SideBar />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: 7vh auto;
    grid-template-columns: 1fr 2fr 1fr;
  }

  .left-container {
    grid-row: 2 / last-line;
    grid-column: 1 / 2;
  }

  .right-container {
    grid-row: 2 / last-line;
    grid-column: 3 / 4;
  }

  .middle-container {
    grid-column: 2 / 3;
  }

  .navbar-container {
    grid-row: 1 / 2;
  }

  .content-container {
    grid-row: 2 / last-line;
  }
</style>
