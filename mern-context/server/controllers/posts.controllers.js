import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

//Metodo obtener todo
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};

//Metodo crear algo nuevo
export const postPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = { url: result.secure_url, public_id: result.public_id };
    }

    const newPost = new Post({ title, description, image });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};

//Metodo actualizar algo por id
export const putPosts = async (req, res) => {
  try {
    const updatePost = await Post.updateOne({ _id: req.params.id }, req.body, {
      new: true,
    });
    return res.send(updatePost);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};

//Metodo eliminar algo por id
export const deletPosts = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(404);
    if(postRemoved.image.public_id){
    await deleteImage(postRemoved.image.public_id);
    }
    return res.sendStatus(404)
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};

//Metodo obtener algo por id
export const getPostsId = async (req, res) => {
  try {
    const postSearch = await Post.findById(req.params.id, req.body);
    if (!postSearch) return res.sendStatus(404);
    res.send(postSearch);
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
};
