<script lang="ts">
  export let text: string;
</script>

<p on:click={() => alert('Hello')}>{text}</p>

<style>
  p {
    margin: unset;
  }

  p:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
</style>
