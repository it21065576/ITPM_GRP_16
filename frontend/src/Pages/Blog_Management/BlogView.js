import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, Divider, Typography, CardContent, CardHeader } from '@material-ui/core';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReportGenerator from '../../Components/ReportGenerator';
import jsPDF from 'jspdf';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    cards: {
        flexGrow: 1,
        padding: 10
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        fontSize: 30,
    },
}));

function BlogView() {
    const location = useLocation();
    const ID = location.state.props;
    const [blog, setBlog] = useState([]);

    const columnsPDF = [{ Title: 'Title', Blogger_Name: 'Blogger_Name', Blogger_Position: 'Blogger_Position', Content: 'Content' }]

    useEffect(() => {
        axios.get(`http://localhost:4000/api/Blogs/getBlogDetails/${ID}`).then((res) => {
            setBlog(res.data.BlogDetails[0]);
        }).catch(err => {
            alert(err)
        })
    }, [])

    console.log("Blof:: ", blog)
    const classes = useStyles();

    function downloadPDF() {
        const doc = new jsPDF();
        const pageContent = document.documentElement.outerHTML;
        doc.text(pageContent, 10, 10);
        doc.save("page.pdf");
    }

    return (
        <>
            <Container style={{ backgroundColor: 'white', width: '100%', marginTop: '20px', padding: '20px', borderRadius: '15px' }}>
                <Card style={{ padding: '15px' }}>
                    <div style={{ marginBottom: '10px', height: '40px', paddingLeft: '5px' }}>
                        <Link to='/Blogs'>
                            <ArrowBackIosIcon style={{ color: 'black' }} />

                        </Link>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6} md={8} style={{ maxHeight: "100%", maxWidth: "500px" }}>
                            <Card>
                                <center>
                                    <img
                                        src={`http://localhost:4000/assets/bloggers/${blog.bloggerImage}`}
                                        alt="Nothing"
                                        style={{
                                            width: "50%",
                                            height: "100%"
                                        }}
                                    />
                                </center>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} >

                            <CardContent>
                                <CardHeader
                                    title={blog.title}
                                    subheader={blog.bloggerPosition}
                                />
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12} >
                            <p style={{ fontSize: '17px', fontFamily: 'Georgia' }}>{blog.content}</p>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 5 }} />
                        <Button onClick={downloadPDF}>
                            Download
                        </Button>
                    </Grid>
                </Card>
            </Container >
        </>
    )
}

export default BlogView