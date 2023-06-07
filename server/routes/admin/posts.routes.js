import { Router } from "express";
import { 
    getPosts,
    postPosts,
    putPosts,
    deletePosts
 } from "../../controllers/posts.controller.js";

const router = Router();

router.get('/posts', getPosts);

router.post('/posts', postPosts);

router.put('/posts/:id', putPosts);

router.delete('/posts/:id', deletePosts);

router.get('/posts/:id', getPosts);

export default router;