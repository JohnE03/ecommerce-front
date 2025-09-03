import { NavLink } from 'react-router-dom'; //router so that links work
import styles from './styles.module.css'
import {Badge, Nav, Navbar, Container} from 'react-bootstrap';
import HeaderLeftBar from './HeaderLeftBar/headerLeftBar';
const {headerContainer, headerLogo} = styles;

export default function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                <span>Our</span>
                <Badge bg='info'>eCom</Badge>
            </h1>
            <HeaderLeftBar />
        </div>
        <Navbar expand="lg" className="bg-primary rounded" data-bs-theme="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="about-us">About us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="Login">Log-in</Nav.Link>
                    <Nav.Link as={NavLink} to="Register">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
