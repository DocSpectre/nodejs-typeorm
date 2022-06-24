# nodejs-typeorm
Basic NodeJS User CRUD using TypeORM


## Requirements

* Node 8+
* PostgreSQL


## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/DocSpectre/nodejs-typeorm
cd nodejs-typeorm
```

```
Create new database in postgres with database name: "typeorm"
```

```bash
npm install
```

```bash
#To setup database config
cp .env.example .env
```


## Steps to run the server

To start the express server, run the following

```bash
npm run start
```

Connect via http://localhost:3000


## Sample Test APIs and Payload
### Lists Users
```
/users/list
```

### Get User By Id
```
/users/:id
```

### Delete User By Id
```
/users/delete/:id
```

### Create new user
```
/users/create
{
    "firstName": "John",
    "lastName": "Wick",
    "age": "11",
    "username": "johnny",
    "password":"guitar"
}
```

### Update user
```
/users/edit/:id
{
    "age": 29
}
```
