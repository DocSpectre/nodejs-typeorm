import { Request, Response } from 'express';

import { UserService } from '../service/UserService';


const userService = UserService.createInstance();

export class UserController {

    static createInstance() {
        return new UserController();
    }


    welcome(req: Request, res: Response) {
        res.status(200).send({
            message: "Welcome to users"
        });
    }

    async create(req: Request, res: Response) {
        const body = req.body;
        const result = await userService.create(body);

        res.status(200).send(result);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const body = req.body;
        const result = await userService.update(id, body)
            .catch(err => { return { err } });;

        res.status(200).send(result);
    }

    async getList(req: Request, res: Response) {
        const result = await userService.find()
            .catch(err => { return { err } });


        if (result['err']) res.status(400).send({ message: "Something went wrong" });

        res.status(200).send(result);
    }

    async getById(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }


}


// const saveUser = async function (auth) {

//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     user.auth = auth;
//     await AppDataSource.manager.save(user)
// }

// const saveAuth = async function () {
//     const auth = new Auth()
//     auth.username = "username"
//     auth.password = "password"
//     await saveUser(auth);
// }

// AppDataSource.initialize().then(async () => {
//     await saveAuth();
// }).catch(error => console.log(error))
