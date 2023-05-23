const express = require("express")

const { blogInsert, getBlogDetails, getBlogDetailsView, deleteBlog, blogUpdate } = require("../Controllers/BlogController");

const router = express.Router();

//blog insertion
router.post("/BlogInsertion", blogInsert);

//get all blogs
router.get("/getAllBlogs", getBlogDetails);

//get the selected blog details
router.get("/getBlogDetails/:id", getBlogDetailsView);

//delete a specific blog detail
router.delete("/deleteBlog/:id", deleteBlog);

//update a selected blog detail
router.put("/updateBlog", blogUpdate)

module.exports = router;