
import { editUser, registerUser, verifyOtp} from "../controller/userController.js";
import { Router } from 'express'


const userRouter = Router()


userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(editUser)
userRouter.route('/verifyOtp').post(verifyOtp)
export default userRouter
