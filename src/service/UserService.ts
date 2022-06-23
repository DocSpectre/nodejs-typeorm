import { User } from '../dao/entity/User';
import { Auth } from '../dao/entity/Auth';
import { UserDao } from '../dao/UserDao';

const userDao = UserDao.createInstance();

export class UserService {


    static createInstance() {
        return new UserService;
    }

    async create(data) {
        const auth = new Auth();
        auth.username = data.username;
        auth.password = data.password;

        const user = new User();
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.age = data.age;
        user.auth = auth;
        return userDao.save(user);
    }

    async find() {
        return await userDao.find();
    }

    async update(id, data) {
        const user = await userDao.findOneByQuery(id);
        const input = { ...user, ...data }

        const userResult = await userDao.save(input);
        return userResult;
    }

    async findById(id) {
        return await userDao.findOneByQuery(id);
    }

    async delete(id) {
        const user = await userDao.findOneByQuery(id);

        return await userDao.remove(user);
    }
}