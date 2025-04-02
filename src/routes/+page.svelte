<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import { selectedStylesheet } from '$lib/stores/stylesheet';
	import markdownContent from './basic-markdown.md?raw';

	let iframe;

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
            html {
              background-color: #909090;
            }
						body {
						  max-width: 8.5in;	
              margin: 2em auto;
							padding: 2em;
              background-color: #fff;
              box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
						}
					</style>
				</head>
				<body>
					${marked(markdownContent)}
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
	<iframe title="preview" bind:this={iframe} class="preview-frame" sandbox="allow-same-origin" />
</main>

<style>
	main {
		height: 100%;
		overflow-y: auto;
	}

	.preview-frame {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
