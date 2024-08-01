import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the CORS package
import authRoutes from './src/routes/authRoutes.js'; // Ensure this path is correct
import sequelize from './src/config/database.js'; // Ensure this path is correct

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin:"https://e-tracker-sable.vercel.app",
  allowedHeaders: ["Authorization","Content-Type"]
}

app.use(cors()); // Use the CORS middleware
app.use(express.json());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
