<script>
	import Text from '$lib/components/NavigationText.md';
	import { selectedStylesheet } from '$lib/stores/stylesheet';
	import templateData from '$lib/data/templates.json';

	const { templates } = templateData;
	let selectedTemplate = templates[0];

	function selectTemplate(template) {
		selectedTemplate = template;
		$selectedStylesheet = template.stylesheetPath;
	}
</script>

<nav class="nav-container">
	<div class="templates-grid">
		{#each templates as template}
			<button
				class="template-card"
				class:selected={template.id === selectedTemplate.id}
				on:click={() => selectTemplate(template)}
			>
				<div class="preview-wrapper">
					<img
						src={template.previewImage}
						alt={`Preview of ${template.name} template`}
						class="preview-image"
					/>
				</div>
				<div class="template-info">
					<h3>{template.name}</h3>
					<p class="description">{template.description}</p>
				</div>
			</button>
		{/each}
	</div>
</nav>

<style>
	.nav-container {
		color: white;
		background-color: black;
		padding: 1rem;
		overflow-y: auto;
		max-height: 100vh;
	}

	.templates-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.template-card {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border: 2px solid transparent;
		border-radius: 8px;
		background: none;
		color: inherit;
		cursor: pointer;
		text-align: left;
		transition: all 0.2s ease;
	}

	.template-card:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.template-card.selected {
		border-color: #fff;
		background: rgba(255, 255, 255, 0.15);
	}

	.preview-wrapper {
		position: relative;
		width: 100%;
		padding-top: 56.25%; /* 16:9 aspect ratio */
		overflow: hidden;
		border-radius: 4px;
	}

	.preview-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.template-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.template-info h3 {
		margin: 0;
		font-size: 1.1rem;
	}

	.description {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.4;
		opacity: 0.9;
	}
</style>
