import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: "dzxeloti1",
    api_key: "374731262784293",
    api_secret: "CcV2lDKBJfDgsZzJpdTw9qY6A-o"
  });

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};
export const deleteImage = async id=>{
    await cloudinary.uploader.destroy(id)
}

