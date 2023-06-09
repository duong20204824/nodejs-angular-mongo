
import authenticate from '../middlewares/authenticate.js'
import express from 'express'
const router = express.Router();
import { getAllStudent, getStudentById, createStudent, updateStudent, deleteOneStudent, getStudentByClassName, getStudentByMSSV } from '../controller/sinhviencontroller.js';
//  router.use(authenticate.verifyToken);
//  router.use(authenticate.isAdmin);
router.get('/all', getAllStudent);
router.get('/:id', getStudentById);
router.post('/add', createStudent);
router.post('/update/:id', updateStudent);
router.delete('/:id', deleteOneStudent);
router.get('/all/class', getStudentByClassName);
router.get('/:mssv',getStudentByMSSV)

export default router; 