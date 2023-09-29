const fs = require('fs').promises;
const path = require('path');

// List of files and directories to delete
const itemsToDelete = [
    'node_modules', 'dist',
    'package-lock.json', 'pnpm-lock.yaml'
];

function shouldDelete(item) {
    return itemsToDelete.includes(item);
}

const deletedPaths = new Set(); // Maintain a set of deleted paths
async function deleteFilesAndDirectories(dir) {
    try {
        if (deletedPaths.has(dir)) {
            return;
        }

        deletedPaths.add(dir);

        try {
            await fs.access(dir);
        } catch (error) {
            return;
        }

        const files = await fs.readdir(dir);
        const deletePromises = [];

        for (const file of files) {
            const filePath = path.join(dir, file);

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

        if (shouldDelete(path.basename(dir))) {
            // console.log(`Deleting directory: ${dir}`);
            deletePromises.push(fs.rm(dir, { recursive: true }).then(() => deletedPaths.delete(dir))); // Remove from Set after successful deletion
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