import Post from "../../models/Post.js";

export const getPosts = async (req, res) => {
    const post = await Post.find();
    res.send(post)
};

export const postPosts = async (req, res) => {
    const { title, description } = req.body;
    const post = new Post({title, description});
    await post.save()
    return res.json(post)
};

export const putPosts = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.send('updated');
};

export const deletePosts = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.sendStatus(204);
};

export const getPost = (req, res) => res.send([]);
