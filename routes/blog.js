import express from "express";
import { promises as fs } from "fs";
import { marked } from "marked";
const router = express.Router()

router.get('/', (req, res) => {
    const posts = [{
        title: 'MartialArts',
        content: ''
    }, 
    {
        title: 'Example',
        content: ''
    }]
    res.render("blog", { posts: posts });
})

router.get("/:pageTitle", async function (req, res) {
    console.log(req.params);
    const posts = `./posts/${req.params.pageTitle}.md`;
    const fileContents = String(
        await fs.readFile(
            posts, (err, data) => {return data}
        )
    );
    res.render("post", {
        post: {
            title: req.params.pageTitle,
            content: marked.parse(fileContents),
        },
    });
});


export default router;

