// import express from 'express';

// const router = express.Router();

// router.get('/dashboard', (req, res) => {
//   res.send('Admin dashboard');
// });

// export default router;
import express from 'express';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';
import { getAllUsers, updateUser, deleteUser } from '../controllers/authController.js';

const router = express.Router();

// Only admin can get, update, delete users
router.get('/users', protect, authorizeRoles('admin'), getAllUsers);
router.put('/users/:id', protect, authorizeRoles('admin'), updateUser);
router.delete('/users/:id', protect, authorizeRoles('admin'), deleteUser);

export default router;