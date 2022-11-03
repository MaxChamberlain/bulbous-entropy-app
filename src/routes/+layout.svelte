<script>
    import { page } from "$app/stores"
    import Header from "../lib/components/Header.svelte"
    import PageTransition from "../lib/components/PageTransition.svelte"
    import '../global.css'
</script>

<!-- {#if $page.url.pathname !== '/' && $page.url.pathname !== '/login' && $page.url.pathname !== '/register'} -->
    <Header />
<!-- {/if} -->

<PageTransition url={$page.url.pathname}>
  <slot />
</PageTransition>