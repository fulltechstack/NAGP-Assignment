const express = require('express');
const db = require('../models');
const Todo = db.todo;
const router = express.Router();

const dummyData = [
  { description: 'Task 1' },
  { description: 'Task 2' },
  { description: 'Task 3' },
  { description: 'Task 4' },
  { description: 'Task 5' }
];

router.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.findAll();
      res.status(200).json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ error: 'Error fetching todos' });
    } 
});


router.post('/todos', async (req, res) => {
  try {
    // Insert the dummy data into the database
    const createdTodos = await Todo.bulkCreate(dummyData,  { returning: true });
    res.status(200).json(createdTodos);
  } catch (error) {
    console.error('Error inserting fake data:', error);
    res.status(500).json({ error: 'Error seeding data' });
  }
});

module.exports = router;