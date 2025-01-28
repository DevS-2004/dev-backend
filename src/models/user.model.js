import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true  // used this when we have to use it for searching purpose
        },
        email: {
            type:String,
            required:true,
            unique: true,
            lowercase: true,
            trim: true 
        },
        fullname: {
            type:String,
            required:true,
            trim: true ,
            index: true
        },
        avatar: {
            type:String,  // cloudinary url(like aws servicce which gives us url after uploading file on it)
            required: true,
        },
        coverImage: {
            type:String
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,   // Encrypt the password before handover to database
            required: [true, 'Password is required !']
        },
        refreshToken:{
            type:String
        }

    },
    {  
        timestamps:true
    }
)

// Here we will not use arrow function because it can't access this properties

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next()  // ye check krega ki agr password ko modify ni krna hai to iss function se bahr chale jao
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)   // return true or false
}  

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
            {
                _id: this._id,
                email: this.email,
                username: this.userSchema,
                fullname: this.fullname
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
)
    
}


export const User = mongoose.model("User", userSchema)