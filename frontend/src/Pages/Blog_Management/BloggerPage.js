import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),

        },
    },
}));

function BloggerPage() {
    const classes = useStyles();

    const [blogID, setBlogID] = useState();
    const [bloggerName, setBloggerName] = useState();
    const [bloggerPosition, setBloggerPosition] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [bloggerImage, setBloggerImage] = useState();

    const Validate = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("blogID", blogID);
        formData.append("bloggerName", bloggerName);
        formData.append("bloggerPosition", bloggerPosition);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("file", bloggerImage);

        console.log("FormDate:: ", formData);

        axios.post("http://localhost:4000/api/Blogs/BlogInsertion", formData).then(async res => {
            console.log("New Blog inserted")
            alert("New Blog Is Inserted!!");
        }).catch(err => {
            console.log("New Blog Insertion failed!!");
            alert("New Blog Insertion failed!!");
        })
    }

    const fileUpload = async (e) => {
        console.log("File set to the blog");
        setBloggerImage(e.target.files[0]);
    }

    return (
        <>
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
            <Container style={{ backgroundColor: '#b3e0e5', marginTop: '60px', width: '80%', padding: '40px', borderRadius: '5px' }}>
                <h1>Add a new blog </h1>
                <br />
                <Form onSubmit={Validate} >
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Blog ID: </Form.Label>
                            <Form.Control type="text" placeholder="Enter the Blog ID" onChange={(e) => { setBlogID(e.target.value) }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Title Of The Blog: </Form.Label>
                            <Form.Control type="text" placeholder="Enter the title" onChange={(e) => { setTitle(e.target.value) }} />
                        </Form.Group>

                    </Row>
                    <Form.Group as={Col} controlId="formGridProductID">
                        <Form.Label>Blogger Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Blogger Name" onChange={(e) => { setBloggerName(e.target.value) }} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Blogger position: </Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder='Enter Blogger Position' onChange={(e) => { setBloggerPosition(e.target.value) }} />

                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Blog content</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder='Enter Blog Content' onChange={(e) => { setContent(e.target.value) }} />
                    </Form.Group>


                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Enter Blogger Image </Form.Label>
                        <Form.Control type="file" onChange={(e) => { fileUpload(e) }} accept='image/*' required />
                    </Form.Group>

                    <center>
                        <Button variant="primary" type="submit" style={{ width: '30%' }}>
                            Submit
                        </Button>
                    </center>
                </Form>

            </Container>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default BloggerPage;