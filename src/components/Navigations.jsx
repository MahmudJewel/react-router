import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "../assets/navigations.css"


const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" className='shadow'>
        <Container>
          <Navbar.Brand >
            <NavLink to="/" activeClassName="active">Navbar</NavLink>
          </Navbar.Brand>
          
          
          <Nav className="me-auto">
          <Nav.Link activeClassName="active">
            <NavLink to="/1" activeClassName="active">Page-1</NavLink></Nav.Link >
            <Nav.Link ><NavLink to="/2" activeClassName="active">Page-2</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/un-1" activeClassName="active">Page-3</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/4">Page-4</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;