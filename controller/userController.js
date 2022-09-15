import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, userId: uuidv4() });
    res.send(user);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.userId === id);
    if (foundUser) {
        res.send(foundUser);
    }
    else {
        res.status(404).send('User not found');
    }
};

export const getUsers = (req, res) => {
    res.send(users);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.userId !== id);
    res.send("User Deleted");
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const foundUser = users.find((user) => user.userId === id);
    if (foundUser) {
        foundUser.firstName = firstName;
        foundUser.lastName = lastName;
        foundUser.age = age;
        res.send(foundUser);
    }
    else {
        res.status(404).send('User not found');
    }
};