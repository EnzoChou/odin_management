import * as fs from 'fs';
import * as path from 'path';

// Helper function to strip file extensions
export const apis = () => {
    const stripExtension = (filename: string) => path.basename(filename, '.ts');

    const functions_api: Api = {};
    const apiPath = __dirname;

    const subfolders = fs.readdirSync(apiPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory()) // Only keep directories
        .map((dirent) => dirent.name);

    subfolders.forEach((subfolder) => {
        const subfolderPath = path.join(apiPath, subfolder);
        const files = fs.readdirSync(subfolderPath, { withFileTypes: true })
            .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.ts')) // Only keep .ts files
            .map((dirent) => dirent.name);

        functions_api[subfolder] = {};

        files.map(async (file, index) => {
            try {
                const functionName = stripExtension(file);
                const filePath = path.join(subfolderPath, file);
                const stat = fs.statSync(filePath);
                console.log('file', file);
                console.log('filePath', filePath);
                // Dynamically import the function
                if (stat.size !== 0 && file) {
                    // const module = await import(filePath.replace('.ts', '.js')); // Using dynamic import
                    // import abc from `${filePath}`;
                    // functions_api[subfolder][functionName] = module;
                    functions_api[subfolder][functionName] = require(filePath);
                }
            } catch (err) {
                console.log('files for each error', err);
            }
        });
    });
    return functions_api;
}

module.exports = apis;