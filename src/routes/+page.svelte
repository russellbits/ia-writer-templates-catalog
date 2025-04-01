<script>
	import { onMount } from 'svelte';
	import { selectedStylesheet } from '$lib/stores/stylesheet';

	let iframe;

	$: if (iframe?.contentDocument && $selectedStylesheet) {
		updateIframeContent();
	}

	async function updateIframeContent() {
		try {
			const response = await fetch('/markdown');
			const markdown = await response.text();

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
                white-space: pre-wrap;
              }
            </style>
          </head>
          <body>
            <div id="content">
              ${markdown}
            </div>
          </body>
        </html>
      `);
			doc.close();
		} catch (error) {
			console.error('Error loading markdown:', error);
		}
	}

	onMount(() => {
		if (!iframe?.contentWindow) return;
		updateIframeContent();
	});
</script>

<iframe
	bind:this={iframe}
	title="markdown-preview"
	class="preview-frame"
	sandbox="allow-same-origin allow-scripts"
/>

<style>
	.preview-frame {
		width: 100%;
		height: 100%;
		border: none;
		margin: 0;
		padding: 0;
		background: white;
	}
</style>
