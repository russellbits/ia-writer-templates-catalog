<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TemplateNav from '$lib/components/TemplateNav.svelte';
	import SamplePanel from '$lib/components/SamplePanel.svelte';
	import '$lib/stylesheets/ui.scss';
</script>

<div id="ui">
	<header>
		<Header />
	</header>

	<nav><TemplateNav /></nav>
	<main id="view">
		<slot />

		<SamplePanel />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style lang="scss">
	#ui {
		display: grid;
		grid-template-columns: 300px auto;
		grid-template-rows: 90px auto 120px;
		height: 100vh;
		background-color: #333;
	}
	/* row 1 */
	header {
		grid-column: 1 / span 2;
		grid-row: 1 / span 1;
		color: white;
		background-color: rgb(147, 37, 189);
		margin: 0;
		position: sticky;
	}
	/* row 2 */
	nav {
		grid-column: 1 / span 1;
		grid-row: 2 / span 1;
	}
	main {
		grid-column: 2 / span 1;
		grid-row: 2 / span 1;
	}
	/* row 3 */
	footer {
		grid-column: 1 / span 2;
		grid-row: 3 / span 1;
		text-align: center;
		color: white;
		background-color: rgb(73, 78, 160);
		padding: 0.4em;
	}
</style>
