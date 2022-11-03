<script lang='ts'>
    import { fly } from 'svelte/transition';
    export let url: string
    const x = url === '/' ? -100 : 100
</script>
  
  {#key url}
    <div
        class='absolute w-full bg-stone-100 min-h-screen p-4'
        in:fly={{ x: x, y: 0, duration: 200 }}
        out:fly={{ x: -x, y: 0, duration: 200 }}
    >
      <slot />
    </div>
  {/key}