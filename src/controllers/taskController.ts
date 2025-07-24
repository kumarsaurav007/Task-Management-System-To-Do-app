import { Request, Response } from 'express';
import { tasks, Task } from '../models/taskModel';
import { v4 as uuidv4 } from 'uuid';

// Create a new task
export const createTask = (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  return res.status(201).json(newTask);
};

// Pagination
export const getAllTasks = (req: Request, res: Response) => {
    let { page = '1', limit = '10', title, status } = req.query;
  
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
  
    let filteredTasks = tasks;
  
    // Filter by title
    if (title) {
      filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes((title as string).toLowerCase())
      );
    }
  
    // Filter by status
    if (status) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === (status as string).toUpperCase()
      );
    }
  
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = pageNum * limitNum;
  
    const paginatedTasks = filteredTasks.slice(startIndex, endIndex);
  
    return res.json({
      total: filteredTasks.length,
      page: pageNum,
      limit: limitNum,
      data: paginatedTasks,
    });
  };
  

// Get task by ID
export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  return res.json(task);
};

// Update task by ID
export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;
  task.updatedAt = new Date().toISOString();

  return res.json(task);
};

// Delete task by ID
export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  return res.json({ message: 'Task deleted successfully' });
};
