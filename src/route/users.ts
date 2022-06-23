import * as express from 'express';
import { UserController } from '../controller/UserController';
const app = express();
const usersController = UserController.createInstance();

app.route('/').get(usersController.welcome);

app.route('/create').post(usersController.create);


app.route('/edit/:id').patch(usersController.update);


app.route('/delete').delete(usersController.delete);

app.route('/list').get(usersController.getList);

app.route('/:id').get(usersController.getById);


export default app;