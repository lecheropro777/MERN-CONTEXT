import {Router} from "express";
import { getPosts,postPost,putPosts,deletPosts,getPostsId } from "../controllers/posts.controllers.js";
const router=Router()

router.get('/posts',getPosts)

router.post('/posts',postPost)

router.put('/posts/:id',putPosts)

router.delete('/posts/:id',deletPosts)

router.get('/posts/:id',getPostsId)

export default router;