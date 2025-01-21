import mongoose, { Schema } from "mongoose";

const defaultRole = process.env.USER_ROLE;

const userSchema = new Schema({
    relation: {
        type: String
    },
    firstName: {
        type: String
    },
    userEmail: {
        type: String,
    },
    dateOfBirth:{
        type:String
    },
    religion:{
        type:String
    },
    motherTounge:{
        type:String 
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    caste:{
        type:String
    },
    subCaste:{
        type:String
    },
    Gothran:{
        type:String
    },
    sudhajathakam:{
        type:String
    },
    dhosham:{
        type:String
    },
    maritalStatus:{
        type:String
    },
    height:{
        type:String
    },
    familStatus:{
        type:String
    },
    familyNetworth:{
        type:String
    },
    familyType:{
        type:String
    },
    familyValues:{
        type:String
    },
    PhysicalValue:{
        type:String
    },
    education:{
        type:String
    },
    employed:{
        type:String
    },
    occupation:{
        type:String
    },
    annualIncome:{
        type:String
    },
    about:{
        type:String
    },
    role:{
        type:Number,
        default: defaultRole

    },
    userName:{
        type:String,
        unique:true
    },
    isVerified: {
        type: Boolean,
        default: false,  // Set default to false when the user registers
      },
});



export const User = mongoose.model("User", userSchema);
