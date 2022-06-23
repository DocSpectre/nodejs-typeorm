import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';
import usersRouter from './route/users';
import { AppDataSource } from './data-source';

// dotenv.config({
//     path: __dirname + '/.env'
// });

var app = express();
app.use(express.json());
app.use(cors());


app.use('/', usersRouter);



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running from port: ', process.env.PORT || 3000);
})
