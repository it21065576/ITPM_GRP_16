import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import '../Styles/btnStyles.css'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import { useNavigate } from 'react-router-dom';
function NavLink() {

  const navigate = useNavigate()
  return (                                  
    <Navbar style={{ backgroundColor: '#d4c4fb' }} expand="lg">
      <Container fluid style={{ marginLeft: '3%', marginRight: '3%' }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100px"
            height="50px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '10%' }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', justifyContent: 'space-between', }}
            navbarScroll
          >
            <Nav.Link className='btnLink' href="/" >Home</Nav.Link>
            <Nav.Link className='btnLink' href="/OurServices" > Services</Nav.Link>
            <Nav.Link className='btnLink' href="/Blogs" >Blog</Nav.Link>
            <Nav.Link className='btnLink' href="/Test" >ContactUs</Nav.Link>
            <Nav.Link className='btnLink' href="/WelcomeSeller" >Donations</Nav.Link>
            <Nav.Link className='btnLink' href="/BloggerManagement" >Blogger</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {
              localStorage.getItem("token") ?
                <Button variant="outline-success"
                  onClick={(e) => {
                    localStorage.clear()
                    navigate("/Register")
                  }}
                >Logout</Button>
                : <Button href="/Login" variant="outline-success">Login</Button>
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavLink;