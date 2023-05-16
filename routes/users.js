import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {

  const user = req.body;

  const userId = uuidv4();

  const userWithId = {...user, id: userId}

  users.push(userWithId);

  res.send(`User with the username ${user.username} has been added to the database`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleted successfully`)
})

export default router;
