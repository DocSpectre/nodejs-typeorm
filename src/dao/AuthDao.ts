import { Auth } from './entity/Auth'
import { AppDataSource } from '../data-source';

const repository = AppDataSource.getRepository(Auth);

export class AuthDao {

    static createInstance() {
        return new AuthDao();
    }

    async save(data) {
        return await repository.save(data);
    }

    async find() {
        return await repository.find();
    }

    async findOneBy(id) {
        return await repository.findOneBy({
            id
        });
    }
}