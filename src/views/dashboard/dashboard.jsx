import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Dashboard() {
    return(
       <>
            <Navbar className='bg-dark-navbar' data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home"><img
              alt=""
              src="/src/assets/icons/F_logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Nav className="">
                <Nav.Link href="#home">Projects</Nav.Link>
                <Nav.Link href="#features">CV Resume</Nav.Link>
                <Nav.Link href="#pricing">Social Media</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
       </> 
    )
}

export default Dashboard