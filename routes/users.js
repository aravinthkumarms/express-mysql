import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from './../controller/userController.js';


const router = express.Router(); // create an instance of express


router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router;
