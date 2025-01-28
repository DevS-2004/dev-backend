import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null   // check if file path is not valid
         // upload the file on cloudinary
        const response  = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })  
        // console.log("File is uploaded on cloudinary !! ",response.url);  // file has been uploaded successfully
        fs.unlinkSync(localFilePath)
        return response;
    } catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary  as the upload operation got failed
        return null
    }
} 



export {uploadOnCloudinary} 