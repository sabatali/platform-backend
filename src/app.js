import cors from 'cors';
import express from 'express';
import connectDB from "./db/db.js";
import notesRoutes from './routes/NotesRoutes.js';
import assingmentRoute from './routes/assingmentRoutes.js';
import compilerRoute from './routes/compilerRoutes.js';
import transactionRoute from './routes/expenseRoutes.js';
import questionRoute from './routes/questionRoutes.js';
import regRoute from "./routes/user-routes.js";
// import routerTransaction from './routes/transactionRoutes.js'

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/v1", regRoute);
app.use("/api/v1", questionRoute);
app.use("/api/v1", assingmentRoute);
app.use("/api/v1", compilerRoute);
app.use("/api/v1", transactionRoute);
app.use("/api/v1", notesRoutes);

// Root route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Coding Platform API!');
});

export default app;
