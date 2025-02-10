import {
    editUser, registerUser, verifyOtp, resetPassword, forgotPassword, getUser, userLogin, getUserById, topMatch, resendOtp, userdetails, userReport,
    getNotifications,
    likeProfile,likedProfiles,
    getComplaint
} from "../controller/userController.js";
import { Router } from 'express'
import upload from '../multer/multer.js';
import uploads from "../multer/usermulter.js";



const userRouter = Router()
userRouter.route('/register').post(registerUser)
userRouter.route('/edit/:id').patch(upload.array("image", 2), editUser)
userRouter.route("/uploads/edit/:id").patch(uploads.single("profilePicture"), editUser);
userRouter.route('/userdetails').get(userdetails)
userRouter.route('/verifyOtp/:userEmail').post(verifyOtp);
userRouter.route('/getUserById/:id').get(getUser)//all matches
userRouter.route('/resetpassworduser/:id/:token').post(resetPassword);
userRouter.route('/forgotpassworduser').post(forgotPassword)
userRouter.route('/usercarddetails/:id').get(getUserById)//dashboard api
userRouter.route('/login').post(userLogin)
userRouter.route('/topmatch/:id').get(topMatch);
userRouter.route('/resendOtp/:userEmail').post(resendOtp);
// userRouter.route('/profileLiked/:likedByUserId').post(profileLiked);
// userRouter.route('/likedProfiles/:likedByUserId').get(likedprofiles);
userRouter.route('/userReport/:id').patch(userReport);
userRouter.route('/getNotifications').get(getNotifications)
userRouter.route('/likeProfile/:likerId').post(likeProfile)
userRouter.route('/likedProfiles/:likerId').get(likedProfiles)
userRouter.route('/getComplaint').get(getComplaint)







export default userRouter