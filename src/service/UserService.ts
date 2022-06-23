import { User } from '../dao/entity/User';
import { UserDao } from '../dao/UserDao';

const userDao = UserDao.createInstance();

export class UserService {


    static createInstance() {
        return new UserService;
    }

    async create(data) {
        return userDao.save(data);
    }

    async find() {
        return await userDao.find();
    }

    async update(id, data) {
        const user = await userDao.findOneBy(id);
        const input = { ...user, ...data }
        console.log('user. ', user);
        const result = await userDao.save(input);


        return result;
    }
}