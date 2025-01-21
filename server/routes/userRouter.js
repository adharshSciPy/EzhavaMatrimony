
import { editUser, registerUser ,verifyEmail} from "../controller/userController.js";
import { Router } from 'express'


const userRouter = Router()


userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(editUser)
userRouter.route("verify-email").get(verifyEmail)

export default userRouter
