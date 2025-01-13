const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const getUsers = (cb) => {
    cb(users);
}

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserById = getUserById;