import { AuthDao } from '../dao/AuthDao';

const authDao = AuthDao.createInstance();

export class AuthService {


    static createInstance() {
        return new AuthService;
    }

    async create(input) {
        return authDao.save(input);
    }

    async find() {
        return await authDao.find();
    }

    async update(id, data) {
        const auth = await authDao.findOneBy(id);
        const input = { ...auth, ...data };

        return await authDao.save(input);
    }
}