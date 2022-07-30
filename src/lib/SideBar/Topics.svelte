<script lang="ts">
  export let text: string;
</script>

<div class="expandable">
  <span>{text}</span>
</div>
<div class="topics-container">
  <slot />
</div>

<style>
  .expandable {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  .expandable:hover {
    background-color: black;
    color: white;
  }

  .topics-container {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 1em;
  }
</style>
