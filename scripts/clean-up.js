const fs = require('fs').promises;
const path = require('path');

const args = process.argv.slice(2);
const passedArgs = args.length > 0;
const nodeItems = ['node_modules', 'package-lock.json', 'pnpm-lock.yaml']
// List of files and directories to delete
const itemsToDelete = [
    'dist',
    ...(passedArgs ? [] : nodeItems),
    'tsconfig.tsbuildinfo'
];

function shouldDelete(item) {
    return itemsToDelete.includes(item);
}

const deletedPaths = new Set(); // Maintain a set of deleted paths
async function deleteFilesAndDirectories(entry) {
    try {
        if (deletedPaths.has(entry)) {
            return;
        }

        if(passedArgs && nodeItems.some(e => entry.includes(e))) {
            return;
        }

        deletedPaths.add(entry);

        try {
            await fs.access(entry);
        } catch (error) {
            return;
        }

        const files = await fs.readdir(entry);
        const deletePromises = [];

        for (const file of files) {
            const filePath = path.join(entry, file);

            if (deletedPaths.has(filePath)) {
                continue;
            }

            try {
                await fs.access(filePath);
            } catch (error) {
                continue;
            }

            const stat = await fs.stat(filePath);

            if (stat.isDirectory()) {
                deletePromises.push(deleteFilesAndDirectories(filePath));
            } else {
                // If it's a file, check if it's in the list of items to delete
                if (shouldDelete(file)) {
                    // console.log(`Deleting File: ${filePath}`);
                    deletePromises.push(fs.unlink(filePath).then(() => deletedPaths.delete(filePath))); // Remove from Set after successful deletion
                }
            }
        }

        if (shouldDelete(path.basename(entry))) {
            // console.log(`Deleting directory: ${dir}`);
            deletePromises.push(fs.rm(entry, { recursive: true }).then(() => deletedPaths.delete(entry))); // Remove from Set after successful deletion
        }

        await Promise.all(deletePromises);
    } catch (error) {
        // console.error(`Error: ${error.message}`);
    }
}

const startTime = Date.now();
deleteFilesAndDirectories('.').then(() => {
    console.log(`Async cleanup execution time: ${Date.now() - startTime} ms`);
});