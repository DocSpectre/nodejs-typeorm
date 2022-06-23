import { User } from './entity/User'
import { AppDataSource } from '../data-source';

const repository = AppDataSource.getRepository(User);
const manager = AppDataSource.manager;

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
        return await repository.findOne(id);
    }

    async findOneByQuery(id) {
        return await repository
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.auth", "auth")
            .where({
                id
            })
            .getOne();
    }

    async remove(user) {
        return await repository.remove(user);
    }
}


// export class UserManager {

//     static createInstance() {
//         return new UserDao();
//     }

//     async update() {
//         await manager.update(User,)
//     }
// }