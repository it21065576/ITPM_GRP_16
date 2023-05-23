import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Typography } from "@material-ui/core";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ProductCatogory from '../../Components/ProductCatogory';
import { useNavigate } from "react-router-dom";
import BlogSlider from "../../Components/BlogSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Blog() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/Blogs/getAllBlogs").then((res) => {
      setBlogs(res.data);
      console.log("res.data===> ", res.data)
    }).catch((err) => {
      alert(err);
    }).then((d) => {

    })
  }, [])

  const MoreDetails = (e) => {
    console.log(e._id);
    const ID = e._id;

    navigate("/BlogView", { state: { props: ID } });
  }

  return (
    <>
      <Container style={{ height: "100%" }}>
        <br />
        <BlogSlider />
        
        <div classname={classes.root} style={{ padding: "15px" }}>
          <Grid container spacing={3}>
            {blogs.map((e, i) => (
              <Grid key={i} item xs={12} md={6} >
                <Card style={{ padding: "10px", height: "28rem", }}>
                  <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '11rem', display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={`http://localhost:4000/assets/bloggers/${e.bloggerImage}`}
                        alt="Nothing"
                        height="100%"
                        width="auto"
                      />
                    </div>
                    <p style={{ fontFamily: 'Impact', fontSize: '23px', fontWeight: 'bold', textAlign: 'center' }}>{e.title}</p>
                    <div style={{ height: '150px', width: 'auto', overflow: 'hidden', padding: '5px' }}>
                      <p >{e.content.substring(0, 400) + '...'}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', bottom: '10px', marginTop: '10px' }}>
                      <Button
                        variant="outline-success"
                        onClick={() => MoreDetails(e)}
                        style={{ marginRight: "15px", }}
                      >
                        View More
                      </Button>
                    </div>

                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container >
    </>
  );
}

export default Blog;