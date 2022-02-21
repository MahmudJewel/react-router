import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" className='shadow'>
        <Container>
          <Navbar.Brand ><Link to="/">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link ><Link to="/1" >Page-1</Link></Nav.Link >
            <Nav.Link ><Link to="/2">Page-2</Link></Nav.Link>
            <Nav.Link><Link to="/un-1">Page-3</Link></Nav.Link>
            <Nav.Link ><Link to="/4">Page-4</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;