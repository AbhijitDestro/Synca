import express from 'express';
import { createProject, updateProject, addMember } from '../controllers/projectController.js';
import requireAuth from '../middleware/authMiddleware.js';

const projectRouter = express.Router();

// Project routes - all protected with authentication
projectRouter.post('/create', requireAuth, createProject);
projectRouter.put('/update', requireAuth, updateProject);
projectRouter.post('/:projectId/add-member', requireAuth, addMember);

export default projectRouter;