import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface cloudinaryResponse {
  url: string;
  public_id: string;
}

// console.log("upload working");


export async function POST(request: NextRequest) {

  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error("Cloudinary environment variables are not set");
  }
try {
  
    const formdata = await request.formData();
    const file = formdata.get("image") as File | null;
    const byte = await file?.arrayBuffer();
    const buffer = Buffer.from(byte!);
  
    const result = await new Promise<cloudinaryResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image", folder: "coverup" }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as cloudinaryResponse);
          }
        })
        .end(buffer);
    });
    // console.log(result);
    
    return NextResponse.json({public_id: result.public_id,url: result.url})
} catch (error) {
  console.log("error in uploading file");
  // throw new Error("error in uploading file");
}
}