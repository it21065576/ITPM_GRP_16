import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}));

function UpdateBlog() {
  const classes = useStyles();

  const [blogID, setBlogID] = useState();
  const [bloggerName, setBloggerName] = useState();
  const [bloggerPosition, setBloggerPosition] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [id, setID] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const blogDate = location.state.data;
      console.log("BlogDate: : ", blogDate);

      setBlogID(blogDate.blogID);
      setBloggerName(blogDate.bloggerName);
      setBloggerPosition(blogDate.bloggerPosition);
      setTitle(blogDate.title);
      setContent(blogDate.content);
      setID(blogDate._id);
    } catch (error) {
      navigate(-1);
    }
  }, []);

  const Validate = (e) => {
    e.preventDefault();

    const formData = {
      blogID,
      bloggerName,
      bloggerPosition,
      title,
      content,
      id,
    };

    console.log("formDate:::", formData);

    axios
      .put("http://localhost:4000/api/Blogs/updateBlog", formData)
      .then((res) => {
        alert("Blog Details updated");
        navigate(-1);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Container
        style={{
          backgroundColor: "LightGray",
          marginTop: "60px",
          width: "80%",
          padding: "40px",
          borderRadius: "5px",
        }}
      >
        <h1>Add a new blog </h1>
        <br />
        <Form onSubmit={Validate}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridProductID">
              <Form.Label>Blog ID: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Blog ID"
                value={blogID}
                onChange={(e) => {
                  setBlogID(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridProductID">
              <Form.Label>Title Of The Blog: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridProductID">
            <Form.Label>Blogger Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Blogger Name"
              value={bloggerName}
              onChange={(e) => {
                setBloggerName(e.target.value);
              }}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Blogger position: </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter Blogger Position"
                value={bloggerPosition}
                onChange={(e) => {
                  setBloggerPosition(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridDescription">
            <Form.Label>Blog content</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              placeholder="Enter Blog Content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </Form.Group>

          <center>
            <Button variant="primary" type="submit" style={{ width: "30%" }}>
              Save
            </Button>
          </center>
        </Form>
      </Container>
    </>
  );
}

export default UpdateBlog;
