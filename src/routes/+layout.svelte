<script>
	import Header from '$lib/components/Header.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<main class="layout">
	<header>
		<Header />
	</header>

	<nav>
		<Navigation />
	</nav>

	<article>
		<slot />
	</article>
</main>

<style lang="scss">
	@font-face {
		font-family: 'IBM Plex Serif';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/IBM-Plex/ibmplexserif-bold-webfont.woff2') format('woff2'),
			url('/fonts/IBM-Plex/ibmplexserif-bold-webfont.woff') format('woff');
	}

	:root {
		font-size: 18px;
		color: white;
	}
	.layout {
		display: grid;
		grid-template-columns: 20% 80%;
		grid-template-rows: auto 1fr;
		height: 100vh;
		width: 100vw;
		margin: 0;
		padding: 0;
	}

	header {
		grid-column: 1 / span 2;
		grid-row: 1;
	}

	nav {
		grid-column: 1;
		grid-row: 2;
	}

	article {
		grid-column: 2;
		grid-row: 2;
		height: 100%;
	}

	/* Reset default margins and ensure full height */
	:global(body, html) {
		margin: 0;
		padding: 0;
		height: 100%;
	}
</style>
