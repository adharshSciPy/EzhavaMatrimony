
import { editUser, registerUser, verifyOtp, getUser } from "../controller/userController.js";
import { Router } from 'express'


const userRouter = Router()


userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(editUser)
userRouter.route('/verifyOtp').post(verifyOtp)
userRouter.route('/getUserById/:id').get(getUser)
export default userRouter
