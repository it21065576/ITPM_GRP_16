import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReportGenerator from '../../Components/ReportGenerator';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),

        },
    },
}));


function ViewBlogDetails() {
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate();

    const columnsPDF = [{ Title: 'Title', Blogger_Name: 'Blogger_Name', Blogger_Position: 'Blogger_Position', Content: 'Content' }]

    useEffect(() => {
        axios.get("http://localhost:4000/api/Blogs/getAllBlogs/").then((res) => {
            console.log("blogs::", res.data);
            setBlogs(res.data);
        }).catch(err => {
            alert(err);
        })

    }, [blogs])

    const itemBlog = (e) => {
        axios.delete(`http://localhost:4000/api/Blogs/deleteBlog/${e}`).then(res => {
            // alert("Blog detail deleted")
            toast.error('Blog Is Deleted Successfuly!!')
        }).catch(err => {
            alert(err)
        })
    }

    const updateBlogDetails = (data) => {
        navigate('/UpdateBlogDetails', { state: { data: data } })
    }

    return (
        <>
            <Container style={{ backgroundColor: '#b3e0e5', width: '100%', borderRadius: '15px' }}>
                <Container >
                    <center>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Button variant="outline-success" href='/BloggerManagement'>
                                        Add Blogs
                                    </Button>
                                    <Button variant="outline-success" href='/ViewBlogDetails'>
                                        View all the blogs
                                    </Button>
                                </Grid>
                            </Grid>
                        </div >
                    </center >
                </Container >
                <center>
                    <br></br>
                    <br></br>
                    <Form className="d-flex" style={{ width: '40%', marginTop: '20px' }}>

                        <Form.Control
                            type="search"
                            value={search}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <Button >Search</Button>
                    </Form>
                </center>

                <Table striped bordered hover style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                    <thead>
                        <tr>
                            <th >Index</th>
                            <th>Blog Title</th>
                            <th>Blogger Name</th>
                            <th>Blogger Position</th>
                            <th>Blog Content</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.filter((element) => {
                            if (search == "") {
                                return element;
                            } else if ((element.bloggerName.toLowerCase()).includes(search.toLowerCase())) {
                                return element;
                            }
                        }).map((elem, id) => (
                            <tr key={id} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                <td>{id + 1}</td>
                                <td>{elem.title}</td>
                                <td>{elem.bloggerName}</td>
                                <td>{elem.bloggerPosition}</td>
                                <td>{elem.content.substring(0, 200) + '...'}</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" onClick={() => { updateBlogDetails(elem) }} >Edit</Button>
                                    <Button style={{ marginLeft: "10px" }} variant="outline-danger" size="sm" onClick={() => itemBlog(elem._id)} >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button varient="outline-primary"
                    onClick={() => ReportGenerator(
                        blogs.map(e => ({
                            Title: e.title,
                            Blogger_Name: e.bloggerName,
                            Blogger_Position: e.bloggerPosition,
                            Content: e.content.substring(0, 100) + '...'
                        }
                        )), columnsPDF, false, "Blog Details")} style={{ marginBottom: 20 }}>Download Blog Details</Button>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Container >
            <br></br>
            <br></br>
           
        </>
    )
}

export default ViewBlogDetails