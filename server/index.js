import express from 'express';
require('dotenv').config();
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routesHandler from './routes';

const PORT = process.env.PORT;
const server = express();
server.use(bodyParser.json({ limit: '30mb', extended: true }));
server.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
server.use(cors());
routesHandler(server);

console.log('connecting to DB...');
mongoose
  .connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((res) => {
    console.log('DB connection successful');
    //start server to listen a request
    server.listen(PORT, () => {
      console.log(`server running on ${PORT} port`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.set('useFindAndModify', false);
