
import { editUser, registerUser, verifyOtp ,resetPassword ,forgotPassword} from "../controller/userController.js";
import { Router } from 'express'


const userRouter = Router()


userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(editUser)
userRouter.route('/verifyOtp').post(verifyOtp)
userRouter.route('/resetpassworduser/:id/:token').post(resetPassword);
userRouter.route('/forgotpassworduser').post(forgotPassword)
 

export default userRouter
