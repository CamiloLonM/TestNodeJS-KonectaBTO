import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/index.js';

import employeesRoutes from './routes/employee.js';
import requestsRoutes from './routes/request.js';

import Database from './database/index.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/employees', employeesRoutes);
app.use('/requests', requestsRoutes);

Database.getInstance().connect();

app.listen(config.port, () => {
  console.log(`Server is running at port ${config.port}`);
});

export default app;
