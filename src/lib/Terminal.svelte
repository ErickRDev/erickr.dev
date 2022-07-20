<script lang="ts">
  import { onMount } from 'svelte';
  import Typed from 'typed.js';

  const PS1 = '$';
  const FEEDBACKS = ['(╯°□°）╯︵ ┻━┻'];

  let isMinimized = false;
  let stdin: string;
  let stdout: string[] = [];

  const flushStdin = (): void => {
    stdout.push(`${PS1} ${stdin ?? ''}`);

    switch (stdin) {
      case 'echo $ABOUT_ME':
        stdout.push(
          "Howdie! Welcome to my little corner on the internet! My name is Erick and I'm a computer scientist who loves everything-software!"
        );
        break;
      case 'whoami':
        stdout.push('Erick Rocha');
        break;
      case 'ls':
        break;
      case 'clear':
        stdout.length = 0;
        break;
      case '?':
        stdout.push('HALP!1!11');
        break;
      default:
        stdout.push(FEEDBACKS[0]);
        break;
    }

    stdout = stdout;
    stdin = '';
  };

  const focusStdin = () => document.getElementById('stdin')?.focus();

  onMount(() => {
    new Typed('#stdin', {
      strings: ['echo $ABOUT_ME'],
      typeSpeed: 20,
      showCursor: true,
      onComplete: () => {
        focusStdin();
        stdin = 'echo $ABOUT_ME';
        document.getElementById('stdin')?.dispatchEvent(
          new KeyboardEvent('keyup', {
            key: 'Enter',
            keyCode: 13
          })
        );
      }
    });
  });
</script>

<div id="terminal-container">
  <div id="terminal-bar">
    <button on:click={() => (isMinimized = !isMinimized)}>-</button>
  </div>
  {#if !isMinimized}
    <div id="terminal" on:click={focusStdin}>
      <div id="terminal-stdout" class="stack">
        {#each stdout as stdoutEntry}
          <p>{stdoutEntry}</p>
        {/each}
        {PS1}
        <input
          autofocus
          id="stdin"
          bind:value={stdin}
          on:keyup={(e) => e.key === 'Enter' && flushStdin()}
        />
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --terminal-size: 40ch;
    --terminal-background: black;
  }

  #terminal-container {
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 80ch;
  }

  #terminal-bar {
    border: none;
    background-color: var(--terminal-background);
    min-height: calc(var(--terminal-size) * 0.05);
    display: flex;
    flex-direction: row-reverse;
  }

  #terminal-bar > button {
    border: none;
    background-color: var(--terminal-background);
    color: white;
  }

  #terminal {
    min-height: var(--terminal-size);
    font-size: 0.8rem;
    background-color: var(--terminal-background);
    color: white;
    box-shadow: 5px 5px 5px rgb(138, 132, 132);
    display: flex;
    padding: var(--s-3);
    font-family: inherit;
  }

  #terminal * {
    color: inherit;
    background-color: inherit;
    font-size: inherit;
    font-family: inherit;
  }

  #stdin {
    padding: 0;
    border: inherit;
    font-size: inherit;
    font-family: inherit;
  }

  #stdin:focus {
    outline: none;
  }

  #terminal-stdout {
    flex-grow: 1;
    display: block;
    --space: 0.5rem; /* overriding .stack default spacing */
  }
</style>
