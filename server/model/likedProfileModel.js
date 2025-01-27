import mongoose, { Schema } from "mongoose";

const likedProfile = new Schema({
    likedByUserId: { type: String, required: true },
    likedUserId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
})

export const likedByProfile = mongoose.model("likedProfile", likedProfile)