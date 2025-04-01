import { json } from '@sveltejs/kit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { compile } from 'mdsvex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function GET() {
    const markdownPath = join(__dirname, '..', 'basic-markdown-syntax.md');
    const content = fs.readFileSync(markdownPath, 'utf-8');
    
    const { code } = await compile(content, {
        // MDsveX options if needed
    });

    // Extract the HTML content from the compiled Svelte component
    const htmlContent = code
        .replace(/^[\s\S]*<script[^>]*>[\s\S]*?<\/script>[\s\S]*?(?=<)/, '') // Remove script tag
        .replace(/<style[^>]*>[\s\S]*?<\/style>/, '') // Remove style tag
        .trim();

    return new Response(htmlContent, {
        headers: {
            'Content-Type': 'text/html'
        }
    });
}
