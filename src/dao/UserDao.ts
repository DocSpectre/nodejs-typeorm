import { User } from './entity/User'
import { AppDataSource } from '../data-source';

const repository = AppDataSource.getRepository(User);

export class UserDao {

    static createInstance() {
        return new UserDao();
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