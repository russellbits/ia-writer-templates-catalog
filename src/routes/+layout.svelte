<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/stylesheets/house.scss';
</script>

<Header />

<main id="ui">
	<slot />
</main>

<Footer />

<style>
</style>
