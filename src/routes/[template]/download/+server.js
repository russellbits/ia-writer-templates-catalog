import { json } from '@sveltejs/kit';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function GET({ params }) {
    const templateId = params.template;
    const staticDir = join(__dirname, '..', '..', '..', '..', 'static');
    
    // Map template IDs to their actual directory names
    const templateMap = {
        'fiction-machine': 'Fiction-Machine',
        'fira': 'FirA',
        'tufte': 'Tufte'
    };

    const templateDirName = templateMap[templateId];
    if (!templateDirName) {
        return new Response('Template not found', { status: 404 });
    }

    const templateDir = join(staticDir, `${templateDirName}.iatemplate`);
    const outputFile = join(staticDir, `${templateId}.iatemplate.zip`);

    try {
        // Create a zip file of the template directory
        await execAsync(`cd "${staticDir}" && zip -r "${templateId}.iatemplate.zip" "${templateDirName}.iatemplate"`);
        
        // Read the zip file
        const templateFile = fs.readFileSync(outputFile);
        
        // Clean up the zip file
        fs.unlinkSync(outputFile);

        return new Response(templateFile, {
            headers: {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${templateDirName}.iatemplate"`
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response('Error creating template archive', { status: 500 });
    }
}
