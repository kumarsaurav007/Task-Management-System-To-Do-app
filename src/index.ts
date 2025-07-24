import express from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', taskRoutes);

app.get('/', (_req, res) => {
  res.send('Task Manager API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
