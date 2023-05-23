const blogModel = require("../Models/BlogModel");

//insert blog
const blogInsert = async (req, res) => {
    const {
        blogID,
        bloggerName,
        bloggerPosition,
        title,
        content,
    } = req.body;

    const BlogItem = req.files.file;
    const BlogNameStore = new Date().getTime();
    await BlogItem.mv("Assets/Bloggers/" + `${BlogNameStore}.jpg`, (err) => {
        console.log("This is the file error::: ", err);
    })
    console.log("File name is ", BlogNameStore)

    try {
        const blogs = new blogModel({
            blogID,
            bloggerName,
            bloggerPosition,
            title,
            content,
            bloggerImage: `${BlogNameStore}.jpg`
        });
        return await blogs
            .save()
            .then((value) => {
                return res.status(201).json({ ID: value._id })
            }).catch((err) => {
                return res.status(500).json({ err });
            })
    } catch (error) {
        console.log("Error", error);
        res.status(400).json({ error: error.message })
    }
};

//get all blog details
const getBlogDetails = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        return res.status(200).json(blogs);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

//get the selected blog view
const getBlogDetailsView = async (req, res) => {
    try {
        const ID = req.params.id;
        const blog = await blogModel.find({ _id: ID });
        res.status(200).send({ status: "Blog data recieved", BlogDetails: blog });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}

//delete a specific blog
const deleteBlog = async (req, res) => {
    const id = req.params.id;
    await blogModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ state: "Success" });
    }).catch((err) => {
        res.status(400).send({ send: err });
    })
}

//upadate a selected blog detail
const blogUpdate = async (req, res) => {
    const id = req.body.id
    const {
        blogID,
        bloggerName,
        bloggerPosition,
        title,
        content,
    } = req.body;

    console.log("ID:::", id)

    const newData = {
        blogID,
        bloggerName,
        bloggerPosition,
        title,
        content,
    };

    await blogModel.findByIdAndUpdate(id, newData).then(() => {
        res.status(200).send({ state: "Update", data: newData });
    }).catch((err) => {
        res.status(400).send({ state: err });
    })
}

module.exports = {
    blogInsert,
    getBlogDetails,
    getBlogDetailsView,
    deleteBlog,
    blogUpdate
}