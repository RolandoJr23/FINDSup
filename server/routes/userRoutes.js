import express from 'express';
import { signUp, signinUser, signoutUser,  verification, forgetPassword, verifyOtp, changePassword } from '../controllers/userController.js';
import { isAuthenticated } from  '../middleware/isAuthenticated.js';
import { userSchema, validateUser } from '../validators/userValidate.js';

const router = express.Router()

router.post('/signup', validateUser(userSchema), signUp)
router.post('/verify', verification)
router.post('/signin', signinUser)
router.post('/signout', isAuthenticated, signoutUser)
router.post('/forget-password', forgetPassword)
router.post('/verify-otp/:email', verifyOtp)
router.post('/change-password/:email', changePassword)

export default router;