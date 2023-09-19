<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TemplateNav from '$lib/components/TemplateNav.svelte';
	import SamplePanel from '$lib/components/SamplePanel.svelte';
	import '$lib/stylesheets/ui.scss';
</script>

<Header />

<main id="ui">
	<TemplateNav />
	<SamplePanel />
</main>

<Footer />

<style>
</style>
