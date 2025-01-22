import { editUser, registerUser, verifyOtp ,resetPassword ,forgotPassword, getUser, userLogin } from "../controller/userController.js";
import { Router } from 'express'


const userRouter = Router()


userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(editUser)
userRouter.route('/verifyOtp').post(verifyOtp)
userRouter.route('/getUserById/:id').get(getUser)
userRouter.route('/resetpassworduser/:id/:token').post(resetPassword);
userRouter.route('/forgotpassworduser').post(forgotPassword)
userRouter.route('/login').post(userLogin)


export default userRouter
