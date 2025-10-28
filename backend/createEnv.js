// createEnv.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define .env content
const envContent = `
MONGO_URI=mongodb+srv://sch19429_db_user:Jsh5BuLR5chac1iO@cluster0.e1cqu2g.mongodb.net/?appName=Cluster0
PORT=5000
`.trim();

// Resolve .env path
const envPath = path.join(__dirname, '.env');

// Write the file
fs.writeFile(envPath, envContent, { flag: 'w' }, (err) => {
  if (err) {
    console.error('❌ Error creating .env file:', err);
  } else {
    console.log('✅ .env file created successfully at:', envPath);
  }
});
