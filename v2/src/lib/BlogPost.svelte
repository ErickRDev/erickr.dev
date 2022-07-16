<script>
  import Sidebar from './Sidebar/index.svelte';
</script>

<div class="container">
  <div class="sidebar-container">
    <Sidebar />
  </div>
  <div class="content-container">
    <slot />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  }

  .sidebar-container {
    grid-row: 1 / last-line;
  }

  .content-container {
    grid-row: 1 / last-line;
    text-align: center;
  }
</style>
