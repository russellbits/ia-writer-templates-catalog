<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { selectedStylesheet } from '$lib/stores/stylesheet';
	import markdownContent from './basic-markdown-syntax.md?raw';

	let iframe;
	let content = '';

	$: if (iframe?.contentDocument && $selectedStylesheet) {
		updateIframeContent();
	}

	function updateIframeContent() {
		const doc = iframe.contentDocument;
		doc.open();
		doc.write(`
			<!DOCTYPE html>
			<html>
				<head>
					<link rel="stylesheet" href="${$selectedStylesheet}">
					<style>
						body {
							margin: 0;
							padding: 2rem;
						}
						#content {
							max-width: 65ch;
							margin: 0 auto;
						}
					</style>
				</head>
				<body>
					<div id="content">${marked(markdownContent)}</div>
				</body>
			</html>
		`);
		doc.close();
	}

	onMount(() => {
		if (!iframe?.contentWindow) return;
		updateIframeContent();
	});
</script>

<main>
	<iframe
		title="preview"
		bind:this={iframe}
		class="preview-frame"
		sandbox="allow-same-origin"
	/>
</main>

<style>
	main {
		background-color: white;
		height: 100%;
		overflow-y: auto;
	}

	.preview-frame {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
