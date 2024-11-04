import app from './app.js';
import { connectDB } from './db.js'; // Import the connectDB function

connectDB(); // Call the connectDB function
app.listen(4000);
console.log('Server on port 4000');