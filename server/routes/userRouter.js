import { editUser, registerUser, verifyOtp, resetPassword, forgotPassword, getUser, userLogin, getUserById, topMatch, resendOtp, profileLiked, userdetails, likedprofiles } from "../controller/userController.js";
import { Router } from 'express'
import upload from '../multer/multer.js';


const userRouter = Router()


userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(upload.single("image"),editUser)
userRouter.route('/userdetails').get(userdetails)
userRouter.route('/verifyOtp/:userEmail').post(verifyOtp);
userRouter.route('/getUserById/:id').get(getUser)
userRouter.route('/resetpassworduser/:id/:token').post(resetPassword);
userRouter.route('/forgotpassworduser').post(forgotPassword)
userRouter.route('/usercarddetails/:id').get(getUserById)
userRouter.route('/login').post(userLogin)
userRouter.route('/topmatch/:id').get(topMatch);
userRouter.route('/resendOtp/:userEmail').post(resendOtp);
userRouter.route('/profileLiked/:likedByUserId').post(profileLiked);
userRouter.route('/likedProfiles/:likedByUserId').get(likedprofiles);




export default userRouter