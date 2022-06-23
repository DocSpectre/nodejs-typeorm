import { Request, Response } from 'express';

import { UserService } from '../service/UserService';
import { AuthService } from '../service/AuthService';


const authService = AuthService.createInstance();
const userService = UserService.createInstance();

export class UserController {

    static createInstance() {
        return new UserController();
    }


    welcome(req: Request, res: Response) {
        res.send({
            message: "Welcome to users"
        });
    }

    async create(req: Request, res: Response) {
        const body = req.body;

        //!WIP Add data validation function
        if (body) {
            //!WIP Add data parser function
            const result = await userService.create(body)
                .catch(err => { return { err } });

            if (!result || result['err']) return res.status(400).send({ message: "Something went wrong" });
            return res.send(result);
        }

        res.status(400).send({ message: "Something went wrong" });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const body = req.body;
        const result = await userService.update(id, body)
            .catch(err => { return { err } });

        if (!result || result['err']) return res.status(400).send({ message: "Something went wrong" });

        res.send(result);
    }

    async getList(req: Request, res: Response) {
        const result = await userService.find()
            .catch(err => { return { err } });

        if (Array.isArray(result) && result.length == 0) return res.send({ message: "No Result found." });

        if (!result || result['err']) return res.status(400).send({ message: "Something went wrong" });

        res.send(result);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const result = await userService.findById(id)
            .catch(err => { return { err } });

        if (!result || result['err']) return res.status(400).send({ message: "Something went wrong" });

        res.send(result);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const result = await userService.delete(id)
            .catch(err => { return { err } });

        if (!result || result['err']) return res.status(400).send({ message: "Something went wrong" });

        res.send(result);
    }

}