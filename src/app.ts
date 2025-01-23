import express from 'express';
import cors from 'cors';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import { route } from './route';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://arronn.vercel.app'],
  }),
);

app.get('/', (req, res) => {
  res.send('Hello World from aronn');
});

app.use('/api', route);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
